//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

module egret {

    /**
     * @language en_US
     * A BitmapData object contains an array of pixel data. This data can represent either a fully opaque bitmap or a
     * transparent bitmap that contains alpha channel data. Either type of BitmapData object is stored as a buffer of 32-bit
     * integers. Each 32-bit integer determines the properties of a single pixel in the bitmap.<br/>
     * Each 32-bit integer is a combination of four 8-bit channel values (from 0 to 255) that describe the alpha transparency
     * and the red, green, and blue (ARGB) values of the pixel. (For ARGB values, the most significant byte represents the
     * alpha channel value, followed by red, green, and blue.)
     * @see egret.Bitmap
     * @version Egret 2.4
     * @platform Web,Native
     * @private
     */
    /**
     * @language zh_CN
     * BitmapData 对象是一个包含像素数据的数组。此数据可以表示完全不透明的位图，或表示包含 Alpha 通道数据的透明位图。
     * 以上任一类型的 BitmapData 对象都作为 32 位整数的缓冲区进行存储。每个 32 位整数确定位图中单个像素的属性。<br/>
     * 每个 32 位整数都是四个 8 位通道值（从 0 到 255）的组合，这些值描述像素的 Alpha 透明度以及红色、绿色、蓝色 (ARGB) 值。
     * （对于 ARGB 值，最高有效字节代表 Alpha 通道值，其后的有效字节分别代表红色、绿色和蓝色通道值。）
     * @see egret.Bitmap
     * @version Egret 2.4
     * @platform Web,Native
     * @private
     */
    export class BitmapData extends HashObject {
        /**
         * @language en_US
         * The width of the bitmap image in pixels.
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 位图图像的宽度，以像素为单位。
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
        /**
         * @language en_US
         * The height of the bitmap image in pixels.
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 位图图像的高度，以像素为单位。
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        height: number;

        /**
         * @language en_US
         * Original bitmap image.
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 原始位图图像。
         * @version Egret 2.4
         * @platform Web,Native
         */
        source: any;

        /**
         * @language en_US
         * WebGL texture.
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * WebGL纹理。
         * @version Egret 2.4
         * @platform Web,Native
         */
        webGLTexture: any;

        /**
         * @language en_US
         * Texture format.
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 纹理格式。
         * @version Egret 2.4
         * @platform Web,Native
         */
        format:string = "image";

        /**
         * @private
         * webgl纹理生成后，是否删掉原始图像数据
         */
        $deleteSource:boolean = true;

        constructor(source) {
            super();
            this.source = source;
            this.width = source.width;
            this.height = source.height;
        }

        public $dispose(): void {
            if (Capabilities.runtimeType == RuntimeType.WEB && Capabilities.renderMode == "webgl" && this.webGLTexture) {
                egret.WebGLUtils.deleteWebGLTexture(this.webGLTexture);
                this.webGLTexture = null;
            }
            //native
            if(this.source && this.source.dispose) {
                this.source.dispose();
            }
            this.source = null;
            BitmapData.$dispose(this);
        }



        private static _displayList = egret.createMap<DisplayObject[]>();
        static $addDisplayObject(displayObject:DisplayObject, bitmapData:BitmapData|Texture):void {
            var hashCode:number;
            if((<Texture>bitmapData)._bitmapData && (<Texture>bitmapData)._bitmapData.hashCode) {
                hashCode = (<Texture>bitmapData)._bitmapData.hashCode;
            }
            else {
                hashCode = bitmapData.hashCode;
            }
            if(!hashCode) {
                return;
            }
            if (!BitmapData._displayList[hashCode]) {
                BitmapData._displayList[hashCode] = [displayObject];
                return;
            }

            var tempList:Array<DisplayObject> = BitmapData._displayList[hashCode];
            if (tempList.indexOf(displayObject) < 0) {
                tempList.push(displayObject);
            }
        }

        static $removeDisplayObject(displayObject:DisplayObject, bitmapData:BitmapData|Texture):void {
            var hashCode:number;
            if((<Texture>bitmapData)._bitmapData && (<Texture>bitmapData)._bitmapData.hashCode) {
                hashCode = (<Texture>bitmapData)._bitmapData.hashCode;
            }
            else {
                hashCode = bitmapData.hashCode;
            }
            if(!hashCode) {
                return;
            }
            if (!BitmapData._displayList[hashCode]) {
                return;
            }

            var tempList:Array<DisplayObject> = BitmapData._displayList[hashCode];
            var index:number = tempList.indexOf(displayObject);
            if (index >= 0) {
                tempList.splice(index);
            }
        }

        static $invalidate(bitmapData:BitmapData|Texture):void {
            var hashCode:number;
            if((<Texture>bitmapData)._bitmapData && (<Texture>bitmapData)._bitmapData.hashCode) {
                hashCode = (<Texture>bitmapData)._bitmapData.hashCode;
            }
            else {
                hashCode = bitmapData.hashCode;
            }
            if(!hashCode) {
                return;
            }

            if (!BitmapData._displayList[hashCode]) {
                return;
            }
            var tempList:Array<DisplayObject> = BitmapData._displayList[hashCode];
            for (var i:number = 0; i < tempList.length; i++) {
                if (tempList[i] instanceof egret.Bitmap) {
                    (<egret.Bitmap>tempList[i]).$refreshImageData();
                }
                tempList[i].$invalidateContentBounds();
            }
        }

        static $dispose(bitmapData:BitmapData|Texture):void {
            var hashCode:number;
            if((<Texture>bitmapData)._bitmapData && (<Texture>bitmapData)._bitmapData.hashCode) {
                hashCode = (<Texture>bitmapData)._bitmapData.hashCode;
            }
            else {
                hashCode = bitmapData.hashCode;
            }
            if(!hashCode) {
                return;
            }

            if (!BitmapData._displayList[hashCode]) {
                return;
            }
            var tempList:Array<DisplayObject> = BitmapData._displayList[hashCode];
            for (var i:number = 0; i < tempList.length; i++) {
                if (tempList[i] instanceof egret.Bitmap) {
                    (<egret.Bitmap>tempList[i]).$Bitmap[sys.BitmapKeys.image] = null;
                }
                tempList[i].$invalidateContentBounds();
            }
            delete BitmapData._displayList[hashCode];
        }
    }
}
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


module egret.tween {

    export type EaseType =
        'quadIn' | 'quadOut' | 'quadOut' | 'quadInOut' |
        'cubicIn' | 'cubicOut' | 'cubicInOut' |
        'quartIn' | 'quartOut' | 'quartInOut' |
        'quintIn' | 'quintOut' | 'quintInOut' |
        'sineIn' | 'sineOut' | 'sineInOut' |
        'backIn' | 'backOut' | 'backInOut' |
        'circIn' | 'circOut' | 'circInOut' |
        'bounceIn' | 'bounceOut' | 'bounceInOut' |
        'elasticIn' | 'elasticOut' | 'elasticInOut';

    /**
     * @language en_US
     * Abstract class, Indicate the base action.
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 抽象类，表示一个基本动作
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    export abstract class BasePath extends EventDispatcher {
        /**
         * @language en_US
         * the name of this action.
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 动作的名称
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public name: string = "";
    }

    /**
     * @language en_US
     * Indicate the to action. See <code>Tween.to</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 表示一个to动作，参见<code>Tween.to</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    export class To extends BasePath {
        /**
         * @language en_US
         * Property set of an object
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 对象的属性集合
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public props: Object = undefined;

        /**
         * @language en_US
         * Duration
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 持续时间
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public duration: number = 500;

        /**
         * @language en_US
         * Easing algorithm
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 缓动算法
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public ease: EaseType | Function = undefined;
    }

    /**
     * @language en_US
     * Indicate the wait action. See <code>Tween.wait</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 表示一个wait动作，参见<code>Tween.wait</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    export class Wait extends BasePath {
        /**
         * @language en_US
         * Duration
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 持续时间
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public duration: number = 500;

        /**
         * @language en_US
         * Whether properties are updated during the waiting time
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 等待期间属性是否会更新
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public passive: boolean = undefined;
    }

    /**
     * @language en_US
     * Indicate the set action. See <code>Tween.set</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 表示一个set动作，参见<code>Tween.set</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    export class Set extends BasePath {
        /**
         * @language en_US
         * Property set of an object
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 对象的属性集合
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public props: Object = undefined;
    }

    /**
     * @language en_US
     * Indicate the tick action. See <code>Tween.tick</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 表示一个tick动作，参见<code>Tween.tick</code>
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    export class Tick extends BasePath {
        /**
         * @language en_US
         * Delta time
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 增加的时间
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public delta: number = 0;
    }

    function convertEase(ease: EaseType | Function): Function {
        if (typeof ease === 'function') {
            return ease;
        } else {
            var func: Function = Ease[ease];
            if (typeof func === 'function') {
                return func;
            }
        }
        return null;
    }

    /**
     * @language en_US
     * TweenItem is a wrapper for Tween, which can set the behavior of Tween by setting attributes and adding Path.
     *
     * @event pathComplete Dispatched when some Path has complete.
     * @event complete Dispatched when all Paths has complete.
     * 
     * @defaultProperty props
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * TweenItem是对Tween的包装器，能通过设置属性和添加Path的方式设置Tween的行为。
     * 通常用于使用在EXML中定义组件的动画。
     *
     * @event pathComplete 当某个Path执行完毕时会派发此事件。
     * @event complete 当所有Path执行完毕时会派发此事件。
     *
     * @defaultProperty props
     * @version Egret 3.1.8
     * @platform Web,Native
     */
    /**
     * Use in exml:
     * ```
     * 	<tween:TweenItem target="{this.button}">
     * 		<tween:props>
     * 			<e:Object loop="{true}"/>
     * 		</tween:props>
     * 		<tween:paths>
     * 			<e:Array>
     * 				<tween:To duration="500">
     * 					<tween:props>
     * 						<e:Object x="{100}" y="{200}" />
     * 					</tween:props>
     * 				</tween:To>
     * 				<tween:Wait duration="1000" />
     * 				<tween:To duration="1000">
     * 					<tween:props>
     * 						<e:Object x="{200}" y="{100}" />
     * 					</tween:props>
     * 				</tween:To>
     * 			</e:Array>
     * 		</tween:paths>
     * 	</tween:TweenItem>
     * ```
     */
    export class TweenItem extends EventDispatcher {

        private tween: Tween;

        constructor() {
            super();
        }

        /**
         * @private
         */
        private _props: any;
        /**
         * @language en_US
         * The Tween's props.
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * Tween的props参数。
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public get props(): any {
            return this._props;
        }

        public set props(value: any) {
            this._props = value;
        }

        /**
         * @private
         */
        private _target: any;
        /**
         * @language en_US
         * The Tween's target.
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * Tween的target参数。
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public get target(): any {
            return this._target;
        }

        public set target(value: any) {
            this._target = value;
        }

        /**
         * @private
         */
        private _paths: BasePath[];
        /**
         * @language en_US
         * The Actions in Tween.
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * TweenItem中添加的行为。
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public get paths(): BasePath[] {
            return this._paths;
        }

        public set paths(value: BasePath[]) {
            this._paths = value || [];
        }

        /**
         * @language en_US
         * Play the Tween
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 播放Tween
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public play(): void {
            if (!this.tween) {
                this.createTween();
            } else {
                this.tween.setPaused(false);
            }
        }

        /**
         * @language en_US
         * Pause the Tween
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 暂停Tween
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public pause(): void {
            if (this.tween) {
                this.tween.setPaused(true);
            }
        }

        private createTween(): void {
            this.tween = Tween.get(this._target, this._props);

            if (this._paths) {
                this.applyPaths();
            }
        }

        private applyPaths(): void {
            for (var i = 0; i < this._paths.length; i++) {
                var path = this._paths[i];
                this.applyPath(path);
            }
        }

        private applyPath(path: BasePath): void {
            if (path instanceof To) {
                this.tween.to(path.props, path.duration, convertEase(path.ease));
            } else if (path instanceof Wait) {
                this.tween.wait(path.duration, path.passive);
            } else if (path instanceof Set) {
                this.tween.set(path.props);
            } else if (path instanceof Tick) {
                this.tween.tick(path.delta);
            }

            this.tween.call(() => this.pathComplete(path));
        }

        private pathComplete(path: BasePath): void {
            path.dispatchEventWith('complete');
            this.dispatchEventWith('pathComplete', false, path);

            var index = this._paths.indexOf(path);
            if (index >= 0 && index === this._paths.length - 1) {
                this.dispatchEventWith('complete');
            }
        }
    }

    registerProperty(TweenItem, 'paths', 'Array', true);

    /**
     * @language en_US
     * TweenGroup is a collection of TweenItem that can be played in parallel with each Item
     * 
     * @event itemComplete Dispatched when some TweenItem has complete.
     * @event complete Dispatched when all TweenItems has complete.
     * 
     * @version Egret 3.1.8
     * @platform Web,Native
     * @includeExample extension/tween/TweenWrapper.ts
     */
    /**
     * @language zh_CN
     * TweenGroup是TweenItem的集合，可以并行播放每一个Item
     * @version Egret 3.1.8
     * @platform Web,Native
     * @includeExample extension/tween/TweenWrapper.ts
     */
    export class TweenGroup extends EventDispatcher {

        private completeCount: number = 0;

        constructor() {
            super();
        }

        /**
         * @private
         */
        private _items: TweenItem[];
        /**
         * @language en_US
         * The Array that TweenItems in TweenGroup.
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * TweenGroup要控制的TweenItem集合。
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public get items(): TweenItem[] {
            return this._items;
        }

        public set items(value: TweenItem[]) {
            this.completeCount = 0;
            this.registerEvent(false);
            this._items = value;
            this.registerEvent(true);
        }

        private registerEvent(add: boolean): void {
            this._items && this._items.forEach(item => {
                if (add) {
                    item.addEventListener('complete', this.itemComplete, this);
                } else {
                    item.removeEventListener('complete', this.itemComplete, this);
                }
            });
        }

        /**
         * @language en_US
         * Play the all TweenItems
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 播放所有的TweenItem
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public play(): void {
            if (this._items) {
                for (var i = 0; i < this._items.length; i++) {
                    var item = this._items[i];
                    item.play();
                }
            }
        }

        /**
         * @language en_US
         * Pause the all TweenItems
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 暂停播放所有的TweenItem
         * @version Egret 3.1.8
         * @platform Web,Native
         */
        public pause(): void {
            if (this._items) {
                for (var i = 0; i < this._items.length; i++) {
                    var item = this._items[i];
                    item.pause();
                }
            }
        }

        private itemComplete(e: Event): void {
            var item = e.currentTarget as TweenItem;
            this.completeCount++;
            this.dispatchEventWith('itemComplete', false, item);
            if (this.completeCount === this.items.length) {
                this.dispatchEventWith('complete');
                this.completeCount = 0;
            }
        }
    }

    registerProperty(TweenGroup, 'items', 'Array', true);

    function registerProperty(classDefinition: any, property: string, type: string, asDefault?: boolean): void {
        var prototype: any = classDefinition.prototype;
        prototype.__meta__ = prototype.__meta__ || {};
        prototype.__meta__[property] = type;
        if (asDefault) {
            prototype.__defaultProperty__ = property;
        }
    }
}
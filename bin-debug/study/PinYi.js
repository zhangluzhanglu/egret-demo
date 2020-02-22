// 平移：http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/transform/index.html#h3-u5E73u79FB
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PinYi = (function (_super) {
    __extends(PinYi, _super);
    function PinYi() {
        return _super.call(this) || this;
    }
    //在页面上，当我们用手指或鼠标点击了某个元素然后开始拖动时，让元素跟着我们的手指或鼠标一起移动
    PinYi.prototype.pin_yi = function (that) {
        //设定2个偏移量
        var offsetX;
        var offsetY;
        //画一个红色的圆
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        circle.x = 100;
        circle.y = 300;
        // that.addChild(circle);  //正式使用时需要这行代码，或者直接在容器类里面使用时直接添加此实例
        /*
           下面不是直接监听的手指移动事件，而是先监听了手指按下和抬起的事件，然后在按下里面监听移动事件，在抬起时删除移动监听
           原因：
                  正常情况下，让元素随着手指移动而移动，实质就是使用坐标修改的方式实现，即用手指滑动的坐标值修覆盖掉元素原本的坐标值即可，
              然后移动事件会在及短的时间频率里不断重复执行，就达到了元素实时随着手指滚动的效果

              但是这里存在一个小问题：
                 即修改元素位置是通过修改元素的左上角原点坐标来实现的，但是我们滑动时不管是手指与元素接触的那个点是随机的，并不一定是左上角那个点，即和左上角的点存在偏移。
           解决：
              最开始就监听按下事件而不是移动事件，然后在按下事件函数里面获取偏移量，然后在监听移动事件，在移动事件函数里面使用当前坐标减去偏移量就得到了当前元素的左上角原点坐标位置
              然后使用这个位置坐标对元素进行赋值，就能精确的实现元素的移动，而没有误差
        */
        //手指按到屏幕，触发 startMove 方法
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, that);
        //手指离开屏幕，触发 stopMove 方法
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, that);
        function startMove(e) {
            //计算手指和圆形的距离
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //手指在屏幕上移动，会触发 onMove 方法
            that.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, that);
        }
        function stopMove(e) {
            console.log(22);
            //手指离开屏幕，移除手指移动的监听
            that.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, that);
        }
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }
        return circle;
    };
    return PinYi;
}(egret.Shape));
__reflect(PinYi.prototype, "PinYi");

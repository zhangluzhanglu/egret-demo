//学习显示对象 http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/displayObject/index.html
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
var MyGrid = (function (_super) {
    __extends(MyGrid, _super);
    function MyGrid() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    MyGrid.prototype.drawGrid = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return MyGrid;
}(egret.Shape));
__reflect(MyGrid.prototype, "MyGrid");
/**
 * 如果要执行，只需要在Main.ts中的onAddToStage方法加入此代码即可，当然你也可以直接在runGame方法执行，因为runGame方法也在onAddToStage中
     var _myGrid: MyGrid = new MyGrid();
     this.addChild(_myGrid);
 */ 

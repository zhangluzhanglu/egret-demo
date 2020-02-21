//学习显示对象 http://developer.egret.com/cn/github/egret-docs/Engine2D/displayObject/displayObject/index.html

class MyGrid extends egret.Shape {
    public constructor() {
        super();
        this.drawGrid();
    }
    private drawGrid() {
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
    }
}


/**
 * 如果要执行，只需要在Main.ts中的onAddToStage方法加入此代码即可，当然你也可以直接在runGame方法执行，因为runGame方法也在onAddToStage中
     var _myGrid: MyGrid = new MyGrid();
     this.addChild(_myGrid);
 */

import { _decorator, Component, Node, Material, gfx, Vec4, ToggleComponent } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Main
 * DateTime = Tue Sep 27 2022 18:31:37 GMT+0700 (Indochina Time)
 * Author = hailua54
 * FileBasename = Main.ts
 * FileBasenameNoExtension = Main
 * URL = db://assets/script/Main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(Material)
    mat: Material = null;

    @property(Node)
    spots: Node = null;

    start () {
        // [3]
        //this.findV(this.mat, 'vblending'.toLocaleLowerCase());
        this.onSpot();
    }

    findV(o, v, path = '', deepth = 0)
    {
        if (deepth >= 5) return;
        for (let i in o)
        {
            if (i.toLocaleLowerCase() == v)
            {
                console.log('found --- ' + path);
                return;
            }
            this.findV(o[i], v, path + '/' + i, deepth + 1);
        }
    }

    update (deltaTime: number) {
        let t = 1;
    }
    
    public setMatUniform(name, value): void 
    {
        let mat = this.mat as any;
        let pass = mat._passes[0];
        let vblendingHandle = pass.getHandle(name);
        pass.setUniform(vblendingHandle, value);
    }

    onTest()
    {
        let mat = this.mat as any;
    }

    onSpot()
    {
        let toggles = this.spots.getComponentsInChildren(ToggleComponent);
        let arr = [0.0, 0.0, 0.0, 0.0];
        for (let i = 0; i < Math.min(toggles.length, 4); i++)
        {
            arr[i] = toggles[i].isChecked ? 1.0 : 0.0;
        }
        this.setMatUniform('vdisplay1', new Vec4(arr[0], arr[1], arr[2], arr[3]));

    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */

export default class Hero {
    name: string
    hp: number
    mp: number
    pw: number
    /**
     * コンストラクター
     * @param name 名前
     * @param hp HP
     * @param mp MP
     */
    constructor(name: string, hp: number, mp: number) {
        this.name = name
        this.hp = hp
        this.mp = mp
        this.pw = hp * 1.2
        console.log(`${this.getName()}が召喚された！！`);
    }
    /**
     * 名前取得
     * @returns 名前
     */
    getName = ():string => {
        return `勇者 ${this.name} `
    }
    /**
     * 攻撃
     */
    attack = () => {
        console.log(`${this.getName()}の攻撃！！`);
        console.log(`敵に ${this.pw} のダメージ！！`);

    }
    /**
     * 睡眠
     */
    sleep = () => {
        if((this.mp - 10) < 0 ) {
            console.log('MPが足りません');
            return
        }
        console.log(`${this.getName()}は眠った！！`);
        console.log(`体力が${this.pw * 0.2}回復した！！`);
        this.mp -= 10
    }
}
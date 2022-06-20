import Character from "./Character"

export default class Hero extends Character {
    // name: string
    // hp: number
    // mp: number
    // pw: number
    /**
     * コンストラクター
     * @param name 名前
     * @param hp HP
     * @param mp MP
     */
    constructor(name: string, hp: number, mp: number) {
        super(name, hp, mp)
        // this.name = name
        // this.hp = hp
        // this.mp = mp
        // this.pw = hp * 1.2
        console.log(`${this.getName()}が召喚された！！`);
    }
    // /**
    //  * 名前取得
    //  * @returns 名前
    //  */
    // getName = ():string => {
    //     return `勇者 ${this.name} `
    // }
    /**
     * 攻撃
     */
    attack = () => {
        console.log(`${this.getName()}の攻撃！！`);
        console.log(`敵に ${this.getPW()} のダメージ！！`);

    }
    /**
     * 睡眠
     */
    sleep = () => {
        if((this.getMP() - 10) < 0 ) {
            console.log('MPが足りません');
            return
        }
        console.log(`${this.getName()}は眠った！！`);
        console.log(`体力が${this.getPW() * 0.2}回復した！！`);
        this.setMP(this.getMP() - 10)
    }
}
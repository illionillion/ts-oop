import Hero from "./Hero";

export default class SuperHero extends Hero {
    super:boolean
    constructor(name: string, hp: number, mp: number) {
        super(name, hp, mp)
        this.super = true
        console.log(`${this.getName()}が召喚された！！`);
    }

    superAtack = () => {
        console.log(`${this.getName()}の攻撃！！`);
        console.log(`敵に ${ this.getPW() * 1.5 } のダメージ！！`);
    }
}
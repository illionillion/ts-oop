export default abstract class Character {
    
    private name: string
    private hp: number
    private mp: number
    private pw: number

    constructor(name: string, hp: number, mp: number) {
        this.hp = hp
        this.mp = mp
        this.name = name
        this.pw = hp * 1.2
    }

    getName = ():string => {
        return this.name
    }
    setName = (name: string):void => {
        this.name = name
    }
    getHP = ():number => {
        return this.hp
    }
    setHP = (hp: number):void => {
        this.hp = hp
    }
    getMP = ():number => {
        return this.mp
    }
    setMP = (mp: number):void => {
        this.mp = mp
    }
    getPW = ():number => {
        return this.pw
    }
    setPW = (pw: number):void => {
        this.pw = pw
    }

}
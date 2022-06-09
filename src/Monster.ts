export default abstract class Monster {
    name: string = ""
    hp: number
    suffix: string
    constructor(hp: number, suffix: string) {
        this.hp = hp
        this.suffix = suffix
        // console.log(`${this.getName()}が現れた！！`);
    }

    getName = ():string => {
        return `モンスター ${this.name}_${this.suffix} `
    }

    runaway = () => {
        console.log(`${this.getName()}は逃げた`);
    }

}
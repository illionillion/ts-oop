import Monster from "./Monster";

export default class Skeleton extends Monster {
    name: string = "スケルトン"
    constructor(hp: number, suffix: string) {
        super(hp, suffix)
        console.log(`${this.getName()}が現れた！！`);
    }

    boneAttack = () => {
        console.log(`${this.getName()}は骨で叩いた！！`);
    }

    wow(): void {
        console.log(`${this.getName()}は鳴いた！！`);
        console.log(`booone!!!`);
    }
}
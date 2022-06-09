"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor(hp, suffix) {
        this.name = "";
        this.getName = () => {
            return `モンスター ${this.name}_${this.suffix} `;
        };
        this.runaway = () => {
            console.log(`${this.getName()}は逃げた`);
        };
        this.hp = hp;
        this.suffix = suffix;
        // console.log(`${this.getName()}が現れた！！`);
    }
}
exports.default = Monster;

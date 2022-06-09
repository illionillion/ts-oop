"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./Hero"));
class SuperHero extends Hero_1.default {
    constructor(name, hp, mp) {
        super(name, hp, mp);
        this.getName = () => {
            return `スーパー勇者 ${this.name}`;
        };
        this.superAtack = () => {
            console.log(`${this.getName()}の攻撃！！`);
            console.log(`敵に ${this.pw * 1.5} のダメージ！！`);
        };
        this.super = true;
        console.log(`${this.getName()}が召喚された！！`);
    }
}
exports.default = SuperHero;

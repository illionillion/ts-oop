"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = __importDefault(require("./Monster"));
class Skeleton extends Monster_1.default {
    constructor(hp, suffix) {
        super(hp, suffix);
        this.name = "スケルトン";
        this.boneAttack = () => {
            console.log(`${this.getName()}は骨で叩いた！！`);
        };
        console.log(`${this.getName()}が現れた！！`);
    }
}
exports.default = Skeleton;

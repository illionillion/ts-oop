"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = __importDefault(require("./src/Hero"));
const Skeleton_1 = __importDefault(require("./src/Skeleton"));
const SuperHero_1 = __importDefault(require("./src/SuperHero"));
let h = new Hero_1.default('ヨシヒコ', 500, 200);
h.attack();
console.log(h.getName());
h.sleep();
console.log(h.mp);
// for (let i = 0; i < 21; i++) {
//     h.sleep()
//     console.log(h.mp);
// }
let sh = new SuperHero_1.default('ヨッシー', 1000, 500);
sh.superAtack();
let sk = new Skeleton_1.default(50, "A");
sk.boneAttack();
sk.runaway();

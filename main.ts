import Hero from "./src/Hero";
import Skeleton from "./src/Skeleton";
import SuperHero from "./src/SuperHero"

let h: Hero = new Hero('ヨシヒコ', 500, 200)

h.attack()

console.log(h.getName());

h.sleep()
console.log(h.getMP());
// for (let i = 0; i < 21; i++) {
//     h.sleep()
//     console.log(h.mp);
// }

let sh: SuperHero = new SuperHero('ヨッシー', 1000, 500)

sh.superAtack()

let sk: Skeleton = new Skeleton(50, "A") 
sk.boneAttack()
sk.runaway()
sk.wow()
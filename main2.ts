'use strict'

import Hero from "./src/Hero"

const h:Hero = new Hero('ヨシヒコ', 500, 200)

console.log(h.getHP());
console.log(h.getMP());
console.log(h.getName());
console.log(h.getPW());
h.hello()
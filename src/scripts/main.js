console.log("Welcome to the main module");

import { createPlan } from './plan.js';


const yearlyPlan = createPlan();

console.log(yearlyPlan);

// test code:
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();

console.log (asparagusSeed);
console.log(cornSeed);
// end test code:
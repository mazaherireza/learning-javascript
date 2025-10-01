import { salutation as salut } from "./utils.js"; // <-------- With js extension.
import something from "./utils.js";

import * as util from "./utils.js";
console.log("util is: ", util); // Module, default, salutation
util.salutation();
console.log(util.default);

console.log(salut());
console.log(something);

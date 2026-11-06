import { greet } from "./app.js";
greet();/*dekho isme kya lkrna hota h ki ek jo html me hamari file h na konsi wali are script js connect kri h na toh uska type module rkhne se kya hota h ki hum import aur export kr pate h isme kya h ki mene app js me kya kiya ki ek functioon bnaya aur usko kya kiya ki uske samne export lika fir script me aake kaha ki udhar se greet joki function ka naam tha usko export import krlo thik h aur {}iska use isliye kiya kyuki jb hum koi default nhi bhej rhe hote dusri file se mtlb export nhi kr rkhe hote default toh ese braces me likhna hota h taki koi dikkt na aye or humari script file usse access krle samjhee aur fir mene us function ko script m import krake chala diya*/ 
import konh from './app.js';
console.log(konh);/*ye example h defAULT KA thik h isme {} iski jrurt nhi pdti ladle samjho aur kuch bhi naam rkh koi frk nhi pdta lekin agr esa named wale m kiya to error ayega*/


import { add,mul } from "./app.js";
console.log(add(2,3));
console.log(mul(2,3));
import {name,age,city} from "./app.js";
console.log(name,age,city);




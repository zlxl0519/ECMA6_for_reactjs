import {writeLetter, writeMemo} from "./writing_util.mjs";//mjs 모듈 자바스크립트 //여러개일때
import mem from "./my_util.mjs"; //하나일때 import

console.log("step08_import.js 시작");

writeLetter();
writeMemo();
console.log(mem.num);
console.log(mem.name);
mem.sayHello();

console.log("step08_import.js 끝");
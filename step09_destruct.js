let data=["apple", "orange","banana", "kiwi"];
// data 배열의 첫번째 두번째 내용은 넘기고 data 를 받는다.
let [,,fruit1, fruit2]=data;

console.log(fruit1); //banana
console.log(fruit2); //kiwi

let mem={num:1, name:"김구라", addr:"노량진"};
//object 방에 이름만 명시한 데이터만 저장된다.
let {name,addr}=mem;

console.log(name); //김구라
console.log(addr); //노량진
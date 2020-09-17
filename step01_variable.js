//변수를 선언하는 방법1 (함수 scope) function 함수 안에서만 사용 가능하고 if 문과 for 문 블럭 같은 것은 밖에서도 사용가능
var myName="김구라";

//변수를 선언하는 방법2 ({} brace scope) 블록 레벨 스코프
let yourName="원숭이";

if(true){
    var num1=10;
    let num2=20;
}
//사용가능하다.
console.log(num1);
//사용 불가능하다.
//console.log(num2);// 참조불가

function test(){
    var num3=30;
}

//console.log(num3); //참조 불가

for(var i=0; i<5; i++){
    console.log(i);
}
console.log(i);

for(let j=0; j<5; j++){
    console.log(j);
}
//console.log(j); //참조 불가


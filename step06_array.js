// 배열의 다양한 기능
let nums=[1,2,3,4,5];

//nums 배열을 처음부터 탐색하면서 가장 첫번째 짝수를 찾아서 리턴
let result=nums.find((x)=>{//find 라는 것은 배열을 탐색한다.
    console.log(x);
    /*
        1
        2
        3
        4
        5
    */
   return x%2 == 0; //2로 나눠서 나머지 0 인 값을 리턴한다
});

let result2=nums.find((x)=>x%2==0);

console.log("result:"+result); //2
console.log("result2:"+result2); //2

//nums 배열을 처음부터 탐색하면서 짝수만 찾아내서 배열에 담아 리턴
let result3=nums.filter((x)=>x%2==0);
console.log(result3);//[ 2, 4 ]

//nums  배열에 새로운 아이템을 추가해서 새로운 배열의 참조값 리턴
let result4=nums.concat(6);
let result5=nums.concat([6,7,8,9,10]);
console.log(result4);//[ 1, 2, 3, 4, 5, 6 ]
console.log(result5); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
  
let names=["김구라"];
let names2=["김구라"];
names.push("원숭이");
let result6=names2.concat("원숭이");// names2 에서 새로운 아이템을 추가해서 새로운 배열을 만들어 낸다.

console.log(names);//[ '김구라', '원숭이' ]
console.log(names2);//[ '김구라' ]
console.log(result6);//[ '김구라', '원숭이' ]
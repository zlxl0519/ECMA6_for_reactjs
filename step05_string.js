// 문자열에 추가된 다양한 기능
 let tag="<ul>\r"
    +"<li>하나</li>\r"
    +"<li>두울</li>\r"
    +"</ul>";
// backtick ` 을 활용한 여러줄의 문자열 만들기
let tag2=`<ul>
    <li>하나</li>
    <li>두울</li>
    </ul>`;
//개행기호를 적지 않아도 들어가있고 탭기호도 알아서 들어간다.
let str=`
    문자열을 
    마음대로
    작성해요`;
const num=1;
const name="김구라";
console.log("번호:"+num+" 이름:"+name); //번호:1 이름:김구라

//back tick 블럭 안에서 바깥영역에 있는 변수나 함수를 참조해서
// 참조된 내용이나 함수가 리턴한 내용을 해당 위치에 출력 할수 있다.
console.log(`번호:${num} 이름:${name}`); //번호:1 이름:김구라

let greet=()=>{
    return "안녕하세요";
}
console.log(` 오늘의 인사: ${greet()}`);
/* 02. function-hoisting(함수 호이스팅) */

console.log(hello('이몽룡'));
// 함수 선언도 안 했는데 위에서 호출해도 돌아감

// console.log(hi('반가워'));
// 이건 출력되지 않음 -> 함수 표현식은 미리 해석되는 것이 아니라 저 줄까지 갔을 때 실행되기 때문

/* 함수 선언문(js 코드 상에서 먼저 해석됨, 반드시 이름이 있어야 함(익명 함수 X)) */
function hello(name) {
    return `${name}님 반가워요!`;
}

/* 함수 표현식(함수 호이스팅이 발생하지 않음) */
var hi = function(name) {
    return `${name} 안녕!`;
}
console.log(hi('반가워'));
// 반가워 안녕!

/*
  함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 해석된다.
  따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
  함수 선언문이 코드의 선두로 끌어 오렬진 것처럼 동작하는 자바스크립트
  고유의 특징을 호이스팅이라고 한다.
*/
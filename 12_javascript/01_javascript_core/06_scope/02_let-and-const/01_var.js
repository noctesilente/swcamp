/* 01. var */

/* 문제가 되는 부분 */
/* 1. 변수 중복 선언 허용 */
var msg = '안녕하세요';
console.log(msg);
// 안녕하세요

var msg = '안녕히 가세요';
console.log(msg);
// 안녕히 가세요

var msg;
console.log(msg);
// 안녕히 가세요
// undefined가 아니라 위에 var msg;를 무시했다는 것
// 초기화를 하지 않은 중복된 변수는 무시된다

/* 2. 함수 레벨 스코프를 가지는 문제 */
// for문을 돌렸는데 전역 변수가 영향을 받음 */
/* 앞서 살펴봄 */

/* 3. 변수 호이스팅 */
console.log(test);

test = '반갑습니다.';
var test;

// undefined가 뜸 
// 변수가 호이스팅되어서 출력됨
// 안 좋은 이유: 코드가 순서가 역순이 될 수 있음

/*
  var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진다.
  즉, 변수 선언문 이전에 참조할 수 있게 된다.
  이는 오류가 발생하지는 않지만 프로그램의 흐름에 맞지 않고 가독성을 떨어뜨리게 된다.
*/
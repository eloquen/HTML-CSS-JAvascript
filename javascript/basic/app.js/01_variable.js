// variable 변수
// var, let, const

var username = 'Alice'
var userage = 25
var useremail = 'alice@gmail.com'

// 객체 ,문자열, 숫자, 배열, 함수가 들어갈 수 있다 
// 넣은것은 콘솔로 확인한다
// 이름을 적는 규칙이 있음 
// 변수명 규칙 : 
// -변수는 문자와 숫자, $와 _만 사용
// (변수는 문자와 숫자를 결합해서 쓸 수 있다_ 
// $를 앞에 쓸 수 있다 
// _를 쓸 수 있다 )
// 예를 들어 
// abc

// -첫글자는 숫자불가
// -예약어는 사용불가 
// (프로그램 자체가 쓰는것들 사용이 안됨)

변수의 타입(변수 안에 들어갈 수 있는것)
*원시데이터 : String, number, boolean(참과 거짓){0,1,true,false}, null, undefined

undefined : 정의되지 않은 상태

*Object : 싱글데이터를 묶어놓은 데이터 
*function : 일급객체





var는 규칙이 없다 


1. var의 특징
블럭을 무시한다. 블럭 밖에서 혹은 안에서도  불러지기 때문
읽기, 쓰기가 가능하다.
{
    var myname = 'Tom'
    myname  
    console.log(myname)
}
console.log(myname)

2. let
읽기, 쓰기 가능

3.const(상수)
상수-읽기만 가능, 변하지 않는다.
{
    const subject = 'html'
    subject = 'css'

    console.log(subject)

}

4. 변수의 데이터 타입 -자료형
문자형 String
{
    const name1 = 'Alice'
    const name2 = 'Alice'

    console.log(name1,name2)

    const firstName = 'Jonh'
    의미가 바뀔때 대문자로 바꿔서 씀 (카멜페이쓰라고도 함)
    const lastName = 'Snow'
    const fullName = firstName + ' ' + lastName
    공백띄울 수 있음
    console.log(fullName)
    console.log(`${firstName} ${lastname}`)
}

5.숫자형  Nember
{
    const num = 10
    const num1 = '10'
    const PI = 3.14
    console.log(`갋은 ${num}이고, 타입은 ${typeof num}입니다`)
    console.log(`갋은 ${PI}이고, 타입은 ${PI}입니다`)

    const a = 1 / 0
    const b = -1 / 0
    const c = -'html' / 10


    console.log(a)
    console.log(b)
    console.log(c)
}

6.불(불린) Boolean
{
    const a = true;
    const b = false;

    const name = 'Alice'
    const age = 16

    console.log(name == 'Alice')
    같다는 걸 적을 때는 ==을 쓴다 
    a= b 
    b값을 a에 넣는다
    console.log(age > 20)

}
한 문장이 끝나면 ;을 붙인다
한줄씩 쓴다면 없어도 되지만 옆에 연달아 쓸 때는 ; 을 붙여야 한다 

예를 들어 조건 나이에 안에 이하면 들어올 수 있고 아니면 들어올 수 없을 때 사용한다


null -  존재하지 않는 값
undefined - 값이 할당되지 않음
{
    const fall = null
    let winter
}


7.대화상자 alert, prompt, confirm
{
    const name = prompt('이름을 입력하세요', '영업팀')
    alert(`안녕하세요,${name}님, 환영합니다`)
    const isCheck = confirm('확인하였습니까?')
    console.log(isCheck)
}

8.형변환(문자에서 숫자로 일어났다는 뜻)
{
    const mathScore = prompt('수학점수는?')
    const engScore = prompt('영어점수는?')
    const score = ( Number(mathSore) + Number(engScore) / 2
    alert(score)
}

조건문

{
    if (조건) {
        행동
    } else {
        행동
    }


    if (조건1) {
        행동
    } else if (조건2){
        행동
    }
}

2. 






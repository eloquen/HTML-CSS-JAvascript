const onePrice = document.querySelector('#price')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('.count')
const totalPrice = document.querySelector('.total span')

const unit_price = 30000
let num = 1
onePrice.textContent = unit_price.toLocaleString()
count.textContent = num

plus.addEventListener('click', function(){
    num++
    count.textContent = num
    paintTotal()
})
// addEventListener :
// addEventListener()는 document의 특정요소(Id,class,tag 등등..) 
// event(ex - click하면 함수를 실행하라, 마우스를 올리면 함수를 실행하라 등등.. )를 등록할 때 사용합니다.

minus.addEventListener('click', function(){
    num--
    if( num < 1) {
        alert('최소 주문 수량은 한개 입니다.')
        num = 1
    }
    count.textContent = num
    paintTotal()
})

function paintTotal() {
    totalPrice.textContent = (unit_price * num).toLocaleString()
}

paintTotal()
const tick = document.querySelector("#blueTick");
const dialogBox = document.querySelector("#newInput");
const price = document.querySelector("#price");
const newPrice = document.querySelector("#newPrice");
const merchant = document.querySelector("#merchant");
const newMerchant = document.querySelector("#newMerchant");
const submit = document.querySelector("#submit");
const dateAndTime = document.querySelector("#dateTime");



let clickCount = 0;
let day;
let month;
let year;

tick.addEventListener('click',()=>{
    clickCount++;
    if(clickCount === 3){
        clickCount = 0;

        dialogBox.showModal();

    }
})

const updateInfo = (function(){

    function details(){
        price.textContent = `₹${newPrice.value}.00`;
        merchant.textContent = `Paid to ${newMerchant.value}`;
    }

    function date(){
        const date = new Date();
        day = date.getDate();
        month = date.toLocaleString('default', { month: 'long' });
        year = date.getFullYear();

        let DateTime = `${day} ${month} ${year}`
        dateAndTime.textContent = DateTime


    }

    return {
        details,
        date,
    }

})()

submit.addEventListener('click',()=>{
    event.preventDefault()

    updateInfo.details();

    dialogBox.close();
})

updateInfo.date();
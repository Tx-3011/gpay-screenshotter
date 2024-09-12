const tick = document.querySelector("#blueTick");
const dialogBox = document.querySelector("#newInput");
const price = document.querySelector("#price");
const newPrice = document.querySelector("#newPrice");
const merchant = document.querySelector("#merchant");
const newMerchant = document.querySelector("#newMerchant");
const submit = document.querySelector("#submit")



let clickCount = 0;

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

    return {
        details,
    }

})()

submit.addEventListener('click',()=>{
    event.preventDefault()

    updateInfo.details();

    dialogBox.close();
})
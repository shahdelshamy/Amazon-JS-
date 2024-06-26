let checkbox=document.querySelector("#checkbox");
let paypalDiv=document.querySelector(".paypal");

    //buy by paybal
checkbox.addEventListener('click',function(){
    let textHTML='';
    if(checkbox.checked == 1){
        textHTML=`
        <div class="text-center  mt-2"><button type="button" class="btn btn-warning pt-2 pe-3 ps-3">PayPal</button></div>
        <div class="text-center mt-2"><img src="../img/pay-removebg-preview.png" style="width:70px"/></div>
        `;
    }
    paypalDiv.innerHTML=textHTML;
});

    //Calculation of price
let paybtn=document.querySelector(".pay");
let item=document.querySelector("#items");
let price=document.querySelector(".price");
let tax=document.querySelector(".tax");
let totalPrice=document.querySelector(".totalPrice");


paybtn.addEventListener('click',function(){
    let itemsFLocal=JSON.parse(localStorage.getItem("cardItems"));
    item.innerHTML=`Items : ${itemsFLocal.length}`;
    let sum=0;
    for(let i=0;i<itemsFLocal.length;i++){
        sum+=itemsFLocal[i].price*itemsFLocal[i].quantity;
    }
    price.innerHTML=`Price Before Tax : $${sum.toFixed(2)}`;
    totalPrice.innerHTML=`Total Price : $${(sum-sum*.1).toFixed(2)}`;
})


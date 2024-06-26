let allItems=[
    {
        id:1,
        img:'img/images-1661721639781.jpg',
        name:'black blazer',
        rate:5,
        price:60.66
    },
    {
        id:2,
        img:'img/images-1661721954566.jpg',
        name:'black t-shirt',
        rate:5,
        price:30.6
    },
    {
        id:3,
        img:'img/images-1661723063348.jpg',
        name:'grey t-shirt hody',
        rate:4,
        price:43.2
    },
    {
        id:4,
        img:'img/images-1661734130933.jpg',
        name:'Balenciaga Twisted-jeans jacket',
        rate:5,
        price:50.33
    },
    {
        id:5,
        img:'img/images-1661734268135.jpg',
        name:'Amina Muadi Sita leather sandals',
        rate:4,
        price:30.25
    },
    {
        id:6,
        img:'img/images-1661734565145.jpg',
        name:'Odissea chunky leather trainers',
        rate:5,
        price:35.22
    },
    {
        id:7,
        img:'img/images-1661735021645.jpg',
        name:'Cool Formal Pants for Women ',
        rate:3,
        price:40.99
    },
    {
        id:8,
        img:'img/images-1661735640671.jpg',
        name:'Cotton dress Jacquemus Robe Hielo dress',
        rate:5,
        price:80.44
    },
    {
        id:9,
        img:'img/images-1661736021736.jpg',
        name:'pantalone',
        rate:5,
        price:50.66
    },
    {
        id:10,
        img:'img/images-1661736457211.jpg',
        name:'Molo Teen denim jeans skirt',
        rate:2,
        price:20.55
    },
    {
        id:11,
        img:'img/images-1661737353733.jpg',
        name:'Stella Kids cotton block coat',
        rate:5,
        price:70.55
    },
    {
        id:12,
        img:'img/images-1661782291990.jpg',
        name:'Bobo Choses cotton hodddy sweatshirt',
        rate:3,
        price:30.55
    },
    {
        id:13,
        img:'img/images-1661782735746.jpg',
        name:'Odissea chunky leather trainers',
        rate:5,
        price:40.3
    },
    {
        id:14,
        img:'img/images-1661783079519.jpg',
        name:'Mini Rodini Penguin-print backpack',
        rate:5,
        price:30.22
    },
    {
        id:15,
        img:'img/women-stretch-popover-hoodie-black.jpg',
        name:'Women Stretch Popover Hoodie Black',
        rate:5,
        price:40.3
    },
    {
        id:16,
        img:'img/athletic-cotton-socks-6-pairs.jpg',
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rate:4,
        price:20.3
    },
    {
        id:17,
        img:'img/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        rate:4,
        price:20.3
    }
];

    //function to add items in page
function generateitems(){
    let itemsText='';
    allItems.forEach(function(item){
        itemsText+=`
      <div class="item border border-warning rounded p-2 text-center">
        <img src=${item.img} style="width:200px;"></img>
        <p style="margin-bottom:5px">${item.name}</p>
        <p style="margin-bottom:5px"><input type="number" placeholder="Quantity" class="q" style="width:90px;"/></p>
        <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${item.rate}.png" class="rate" width="90px">
        <p style="margin-bottom:5px">$${item.price}</p>
        <p class="added" style="color:green; font-size:17px; margin-bottom:5px"></p>
        <button type="button" class="btn btn-warning addbtn">Add To Card</button>
     </div>
        `;
    });
    let containerItems=document.querySelector(".content-items");
    if(containerItems){
        containerItems.innerHTML=itemsText;
    }
    
}
generateitems();

    //search to filter the items
let search=document.querySelector("#search");
search.addEventListener('keyup',function(){
    filterItems(search.value);
});
function filterItems(value){
let itemText=``;
for(let i=0;i<allItems.length;i++){
    if(allItems[i].name.toLowerCase().includes(value.toLowerCase())){
        console.log("shahd");
        itemText+=`
        <div class="item border border-warning rounded p-2 text-center">
        <img src=${allItems[i].img} style="width:200px;"></img>
        <p style="margin-bottom:5px">${allItems[i].name}</p>
        <p style="margin-bottom:5px"><input type="number" placeholder="Quantity" class="q" style="width:90px;"/></p>
        <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${allItems[i].rate}.png" class="rate" width="90px">
        <p style="margin-bottom:5px">$${allItems[i].price}</p>
        <p class="added" style="color:green; font-size:17px; margin-bottom:5px"></p>
        <button type="button" class="btn btn-warning addbtn">Add To Card</button>
     </div>
        `;
    }
}
let containerItems=document.querySelector(".content-items");
    if(containerItems){
        containerItems.innerHTML=itemText;
        added();
        saveLocalStorage();
    }
};

    //added
function added(){
    let addButton=document.querySelectorAll(".addbtn");
    let addParagraph=document.querySelectorAll(".added");
    for(let i=0;i<addButton.length;i++){
        addButton[i].addEventListener('click',function(){
        if(document.querySelectorAll(".q")[i].value!==""){
            addParagraph[i].innerHTML="product added";
        }else{
            alert("Please Specify The Quantity");
          }
        });
    };
  
}
added();

    //Saving Cards in Localstorage
let checkOutcart = JSON.parse(localStorage.getItem("cardItems")) ||[];
function saveLocalStorage(){
    let btnCard=document.querySelectorAll(".addbtn");
    let quantity=document.querySelectorAll(".q");
    for(let i=0;i<btnCard.length;i++){
        btnCard[i].addEventListener('click',function(){
          if(document.querySelectorAll(".q")[i].value!==""){
            checkOutcart.push({
                id:allItems[i].id,
                name:allItems[i].name,
                price:allItems[i].price,
                quantity:quantity[i].value,
                img:allItems[[i]].img
            });
            console.log(checkOutcart);
            localStorage.setItem("cardItems",JSON.stringify(checkOutcart));
          }
        })
    }
    
}
saveLocalStorage();

    //Push items in Payment Page And Check If There Are Items Or Not
function cardCheck(){
if(location.href.substring(location.href.lastIndexOf('/') + 1) ==="payment.html"){
let containerItems = document.getElementById("contentCard");
if(checkOutcart.length==0){
    let itemHTML='';
    itemHTML=`
    <div>
    <h4 class="mt-5 mb-3 text-danger">Your Cart Is Empty</h4>
    <a href="amazone.html"><button type="button" class="btn btn-warning ps-3 pe-3 pt-2 pb-2 fs-5">Shopping Now</button></a>
    </div>
    `;
    // update ui for html
    if(containerItems){
        containerItems.innerHTML=itemHTML;
    };
}
else{
    let itemHTML='';
    for(let i=0;i<checkOutcart.length;i++){
        itemHTML+=`
        <div class="item border border-warning rounded p-2 text-center">
        <img src=${checkOutcart[i].img} style="width:200px;"></img>
        <p style="margin-bottom:5px">${checkOutcart[i].name}</p>
        <p style="margin-bottom:5px"><input type="number" class="q" style="width:50px; text-align:center;" value=${checkOutcart[i].quantity} /></p>
        <p style="margin-bottom:5px">$${checkOutcart[i].price}</p>
        <button type="button" class="btn btn-warning removebtn">Remove From Cart</button>
     </div>
        `;
    };
    if(containerItems){
        console.log(checkOutcart);
        containerItems.innerHTML=itemHTML;
        removeItems();
    };
}
}
}
cardCheck();

    //Remove Items From Payment Page And LocalStorage
function removeItems(){
    let removebtn=document.querySelectorAll(".removebtn");
    for(let i=0;i<removebtn.length;i++){
        removebtn[i].addEventListener('click',function(){
            checkOutcart.splice(i,1);
            console.log(checkOutcart);
            localStorage.setItem("cardItems",JSON.stringify(checkOutcart));
            cardCheck();
        });
    }
}




     



// localStorage.clear();

console.log(location.href.substring(location.href.lastIndexOf('/') + 1));


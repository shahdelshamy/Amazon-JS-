let mail=document.querySelector("#textNewAccount");
let password=document.querySelector("#passwordNewAccount");
let phone= document.querySelector("#phone");
let age= document.querySelector("#age");
let saveData= document.querySelector(".save-data");

let myForm=document.querySelector(".myForm")

let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popupContaint");
let buttonClose = document.querySelector(".close");
let toggle = document.querySelector("#toggleButton");

let user;

// localStorage.clear();

   // Store in local storage
saveData.addEventListener('click', function(event) {
    if(mail.value!=="" && password.value!=="" && phone.value!=="" && age.value!==""){

        //Degalut of form is reload of page
        myForm.addEventListener('submit', function(event) {
         event.preventDefault()});

    user={
        mail:mail.value,
        password:password.value,
        phone:phone.value
    };
    const key = 'users'; 
    let users = localStorage.getItem(key);
    if (users) {
        users = JSON.parse(users);
     } else {
        users = [];
     }
     users.push(user);

     localStorage.setItem(key, JSON.stringify(users));

             //Popup
    popupfunction(event);

        mail.value="" ;
        password.value="" ;
        phone.value="";
        age.value="";

    }else{
        alert('Please Fill All Fields!');
    }
});


let popupfunction=function(event){
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        popup.style.display = 'block';
        // Force a reflow to ensure the transition starts
        void popup.offsetWidth;
        popup.classList.add('open');
    
        buttonClose.onclick = function(event1) {
            event1.stopPropagation(); // Prevent the click event from bubbling up to the document
            popup.classList.remove('open');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300); // Match the duration of the CSS transition
        }
    }

let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popupContaint");
let buttonClose = document.querySelector(".close");
let toggle = document.querySelector("#toggleButton");

let loginForm = document.querySelector(".loginForm");
let loginMail=document.querySelector("#loginMail");
let loginPass=document.querySelector("#loginPass");
let login = document.querySelector("#login");


login.addEventListener('click',function(event){
    
        loginForm.addEventListener('submit',function(event1){
            event1.preventDefault();
        });
    
        let persons=JSON.parse(localStorage.getItem("users"));
    
        let check=0;
    
        for(let i=0;i<persons.length;i++){
            if(loginMail.value===persons[i].mail && loginPass.value===persons[i].password){
                window.open('amazone.html','_self');
                check=1;
                break;
            }
        }
        
        if(check===0){
            popupfunction(event);
           
        }
        
        //console.log(Array.isArray(persons));
});




             // popup
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


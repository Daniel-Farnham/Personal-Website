
//SECTION FOR INTRODUCTION SPELL OUT

const text = document.querySelector("h1");
const strText = text.textContent;
const splitText = strText.split(""); 
text.textContent = ""; 

const my_name = document.getElementsByClassName("name");

const nav_bar = document.querySelector("ul"); 

for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";; 
    
}

let char = 0;
let timer = setInterval(onTick, 125)

function onTick() {
    const span = text.querySelectorAll('span')[char]; 
    span.classList.add('fade'); // adding in new class 

    char++ 
    

    if (char === splitText.length) {
        addNav(); 
        complete();
        //nameColor(); 
        return; 
    }
}

function addNav() {
    nav_bar.style.opacity = 1;  
   
}

function nameColor() {
    // my_name.style.color = "blue"; 
}


function complete () {
    clearInterval(timer); 
    timer = null; 
}





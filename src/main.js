
//SECTION FOR INTRODUCTION SPELL OUT

const text = document.querySelector("h1");
const strText = text.textContent;
const splitText = strText.split(""); 
text.textContent = ""; 




console.log(strText); 
console.log(splitText); 




for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
    console.log(splitText[i]); 
    
}

/* const changeColour = (a) => {
    a.classList.add('NewColour'); 
}

let = NewDaniel = changeColour(document.querySelector("Daniel")) 


console.log(NewDaniel); 
*/

let char = 0;
let timer = setInterval(onTick, 125)
// the timer selects calls onTick and repeats it every 'x' milliseconds. 

// the function onTick, selects all of spans and the [char] ensures we are selecting each individual one. 
//It takes every span. 
// adds in the class list 'fade'. 
//Once we have the class list 'fade we can 
function onTick() {
    const span = text.querySelectorAll('span')[char]; 
    span.classList.add('fade'); // adding in new class 
    
    /* if (char > 20) {
        span.classList.add('fade', 'newColour')
    }
    else {
        span.classList.add('fade'); 
    }

    let blueElement = document.getElementsByClassName('newColour');  This is just some leftover code to help change my name to blue */ 

    char++ 
    
    if (char === splitText.length) {

        complete();
        return; 
        
    }
}

function complete () {
    clearInterval(timer); 
    timer = null; 
}

// it will be cool to just change my name to blue. 
/*



/* Section for animated scroll 

const intro = document.querySelector('.Playground-Vintage'); 
const video = intro.querySelector('video');
const aboutText = intro.querySelector('h1');

// End Section

const section = document.querySelector('section');
const end = section.querySelector('h1'); 

// Scroll Magic

const controller = new ScrollMagic.Controller(); 

// Scene handles blocks of animations 
const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.addTo(controller); 

*/

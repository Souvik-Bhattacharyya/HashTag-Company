// <!-- Scroll To Top Button -->

mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// typedText
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Website Design & Development","App Development", "Backend Operations For Night Shifts" ,"Andriod & iOS","Graphic Design","Digital Marketing"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase, newTextDelay);
    }
};

function erase(){
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(erase , erasingDelay);
    }
    else{
        textArrayIndex ++;
        if(textArrayIndex >=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
};

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
});


// Svg Animated
const logo = document.querySelectorAll("#top-svg path");

for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
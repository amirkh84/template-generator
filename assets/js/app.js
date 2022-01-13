//variables
let colorHolder = document.querySelectorAll(".color");
let hex = document.querySelectorAll(".hex");
let Btop = document.querySelector(".background-top");
let Bbottom = document.querySelector(".background-bottom");
let card = document.querySelectorAll(".card");
let more = document.querySelectorAll(".more");
let btnGen = document.querySelector(".generate");
let root = document.querySelector(":root"); //the root part in css
let colorA,colorB,colorC;
//hex color generator
function gen() {
    let symbols , color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16 )];
    };
    return color;
};
//changing colors function
function change() {
    colorA = gen();
    colorB = gen();
    colorC = gen();
    Btop.style.backgroundColor = colorA;
    Bbottom.style.backgroundColor = colorB;
    for (let n = 0; n < card.length; n++) {
        card[n].style.backgroundColor = colorC;
        more[n].style.borderColor = colorA;
        more[n].style.color = colorA;
    };
    let Carr = [colorA , colorB , colorC];
    for (let m = 0; m < colorHolder.length; m++) {
        colorHolder[m].style.backgroundColor = Carr[m];
        hex[m].innerText = Carr[m];
    };
    root.style.setProperty("--hover",colorA);
    root.style.setProperty("--ht",colorC);
    root.style.setProperty("--text",colorA);
};
// click event listener
btnGen.addEventListener("click",change);
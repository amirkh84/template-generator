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
    for (let index = 0; index < card.length; index++) {
        card[index].style.backgroundColor = colorC;
        more[index].style.borderColor = colorA;
        more[index].style.color = colorA;
    };
    colorHolder[0].style.backgroundColor = colorA;
    colorHolder[1].style.backgroundColor = colorB;
    colorHolder[2].style.backgroundColor = colorC;
    hex[0].innerText = colorA;
    hex[1].innerText = colorB;
    hex[2].innerText = colorC;
    root.style.setProperty("--hover",colorA);
    root.style.setProperty("--ht",colorC);
    root.style.setProperty("--text",colorA);
};
// click event listener
btnGen.addEventListener("click",change);
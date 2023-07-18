
function run () {

let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6,png

let randomImageSource = "Images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;  //1-6

let randomImageSource2 = "Images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS!";
    document.querySelector(".btn").innerHTML = "Play Again";

}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 PLAYER 2 WINS!";
    document.querySelector(".btn").innerHTML = "Play Again";


}

else {
    document.querySelector("h1").innerHTML = "🚩 GAME IS DRAWN!";
    document.querySelector(".btn").innerHTML = "RETRY";
 
}
}

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1+1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2+1);


var image1 = "images/dice"+randomNumber1+".png";
var image2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", image1);

document.querySelector(".img2").setAttribute("src", image2);

if (image1>image2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    
} else if (image1 === image2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
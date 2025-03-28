var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "imagens/" + randomDiceImage; // varição de imagens do dado de 1 a 6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomImageSource2 = "imagens/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//condições de vitória e empate
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Venceu";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Venceu";
}else{
    document.querySelector("h1").innerHTML = "Empatou";
}
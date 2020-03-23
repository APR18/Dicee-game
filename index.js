var randomNumber1 = Math.floor(Math.random() * 6);

var randomNumber2 = Math.floor(Math.random() * 6);

var dices = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

var image1 = document.querySelector(".img1");
image1.setAttribute("src", dices[randomNumber1]);

var image2 = document.querySelector(".img2");
image2.setAttribute("src", dices[randomNumber2]);

// conditions

if (randomNumber1 > randomNumber2) {
  document.querySelector(".heading").innerText = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".heading").innerText = "Player 2 Wins";
} else {
  document.querySelector(".heading").innerText = "Tie";
}

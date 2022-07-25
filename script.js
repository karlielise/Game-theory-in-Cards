const cards = [
  {
    img: "/Images/king.jpg",
    name: "King",
    id: 0,
  },
  {
    img: "/Images/3.jpg",
    name: "3",
    id: 1,
  },
  {
    img: "/Images/Ace.png",
    name: "Ace",
    id: 2,
  },
];

cards.sort(() => 0.5 - Math.random());
const selectedCards = [];
let guessChoice = ["Ace", "King", "3"];
guessChoice.sort(() => 0.5 - Math.random());
let choice = guessChoice[0]
const guess = document.querySelector(".guess");
guess.textContent = choice;

const chance = document.querySelector(".probability");
const chanceText = document.querySelector(".chance")
let arrayLength = cards.length;
let constant = 1;
let division = (constant / arrayLength);
let probability = Math.pow(division, arrayLength).toFixed(4);
chance.textContent = probability;

const restart = document.getElementById("restart")

displayCards = () => {
  const rowSect = document.querySelector(".row");

  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-sm");
    cardElement.setAttribute("data-id", index);
    cardElement.innerHTML = `<div class="card">
              <img src=${card.img} class="back card-img-top" alt=${card.name}> 
             </div>`;
    
    rowSect.appendChild(cardElement);
    if (rowSect.firstChild) {
      rowSect.removeChild(rowSect.firstChild);
    }
    cardElement.addEventListener("click", revealFrontFace);
  });
};

const revealFrontFace = (e) => {
  let target = e.currentTarget;
  let firstChild = target.firstChild;
  firstChild.classList.toggle("rotate");
  let imageId = e.currentTarget.getAttribute("data-id")
  answer(imageId)
};

const answer = (id) => {
  const lose = document.querySelector(".lose");
  const outcome = document.querySelector(".outcome");
  let imageName = cards[id].name;
  console.log(imageName);
  console.log(choice == imageName)
  if (choice == imageName) {
    guess.textContent = "You Win"
    lose.classList.remove("hide");
    outcome.textContent = "You Win"
    chanceText.classList.add("visible")
    document.body.style.pointerEvents = "none"
    restart.textContent = "Good Work Try Again";
  } else {
    guess.textContent = "You Lose"
    lose.classList.remove("hide")
    chanceText.classList.add("visible")
    document.body.style.pointerEvents = "none"
  }
  gameOver()
  
}

function gameOver() {
  restart.style.pointerEvents = "all"
  restart.addEventListener("click", () => {
    window.location.reload()
  })
}

displayCards();

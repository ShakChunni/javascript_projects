//local reviews
const reviews = [
    {
        id: 1,
        Name:"MD Fuad Hasan",
        job: "Blockchain specialist aka NFT bros😎",
        img: "./20220602_154210.jpg",
        text:"Ami very angry man, Tumar website TRASH. now buy my NFT 🤑",
    },
    {
        id: 2,
        Name:"Ahmed Awsaf Chowdhory",
        job: "Ei ami cool chele!😎",
        img: "./FB_IMG_1605446979630.jpg",
        text:"Egula website diye ki hobe? amar sathe thako meye potnao shikhabo 😁",
    },
    {
        id: 3,
        Name:"Shoeb Islam Hamim",
        job: "Everything specialist🐐",
        img: "./20220516_151534.jpg",
        text:"Thumbs up! 👍",
    },
    {
      id: 4,
      Name: "Mohammad Ashfaq",
      Job: "Nai 😞",
      img: "./20220502_113336.jpg",
      text: "Heyyy👋, tumar website dekhte bhalo nah 😂",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randoBtn = document.querySelector(".random-btn");

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
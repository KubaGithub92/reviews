const reviewsData = [
  {
    img: "img/jake-nackos-IF9TK5Uy-KI-unsplash (1).jpg",
    author: "Jake Nackos",
    job: "UX Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
  },

  {
    img: "img/joseph-gonzalez-iFgRcqHznqg-unsplash (1).jpg",
    author: "Joseph Gonzales",
    job: "Tennis Coach",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, eleifend a lorem sed, facilisis tempor urna. Aliquam tincidunt. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt.",
  },

  {
    img: "img/stephanie-liverani-Zz5LQe-VSMY-unsplash (1).jpg",
    author: "Stephanie Liverani",
    job: "Frontend Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
  },

  {
    img: "img/jurica-koletic-7YVZYZeITc8-unsplash (1).jpg",
    author: "Jurica Koletic",
    job: "Realtor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium animi accusamus at, nesciunt. laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
  },
];

const btnPrevious = document.querySelector(".review__arrow_left");
const btnNext = document.querySelector(".review__arrow_right svg");

const img = document.querySelector(".review__img");
const author = document.querySelector(".review__author");
const job = document.querySelector(".review__job");
const text = document.querySelector(".review__text");

let currentReview = 0;

const displayReview = (reviewNum) => {
  const review = reviewsData[reviewNum];
  img.src = review.img;
  author.textContent = review.author;
  job.textContent = review.job;
  text.textContent = review.text;
};

btnNext.addEventListener("click", () => {
  currentReview++;
  if (currentReview > reviewsData.length - 1) {
    currentReview = 0;
  }
  displayReview(currentReview);
});

btnPrevious.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviewsData.length - 1;
  }
  displayReview(currentReview);
});

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "ArrowLeft") {
    currentReview--;
    if (currentReview < 0) {
      currentReview = reviewsData.length - 1;
    }
    displayReview(currentReview);
  }
});
document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "ArrowRight") {
    currentReview++;
    if (currentReview > reviewsData.length - 1) {
      currentReview = 0;
    }
    displayReview(currentReview);
  }
});

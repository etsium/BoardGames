import { getEventCurrent } from "../main.js";
import { createStarRating } from "./starRaiting.js";


export const createReviewModal = () => {
    const reviews = getEventCurrent().reviews;
    const modal = document.createElement("section");

    const close = document.createElement("p");
    close.textContent = "X";
    close.addEventListener("click", () => {
        modal.style.display = "none";
    })

    modal.appendChild(close);

    const modalReviews = document.createElement("div");
    modalReviews.classList.add("modalReviews")

    modal.id = "review-modal";

    reviews.forEach(review => {
        modalReviews.appendChild(createReviewCard(review))
        modal.appendChild(modalReviews);
    });

    document.querySelector("main").appendChild(modal);
}

export const updateReviewModal = (modal) => {
    const reviews = getEventCurrent().reviews;
    const modalReviews = modal.querySelector(".modalReviews");
    modalReviews.replaceChildren();    

    modal.style.display = "grid";
    reviews.forEach(review => {
        modalReviews.appendChild(createReviewCard(review));
    })
    document.querySelector("main").appendChild(modal);
}

const createReviewCard = (review) => {
    const cardReview = document.createElement("div");
    cardReview.classList.add("cardReview");
    const nameLabel = document.createElement("label");
    nameLabel.textContent = review.name;
    const reviewLabel = document.createElement("label");
    reviewLabel.textContent = review.review;
    const score = createStarRating(review.score);

    nameLabel.textContent = review.name;
    reviewLabel.textContent = review.review;

    cardReview.append(nameLabel, score, reviewLabel);
    return cardReview;
}

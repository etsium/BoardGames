import { getScore } from "../main.js";

export const createStarRating = (listScore) => {
    const rating = getScore(listScore); 
    const normalizedRating = Math.min(Math.max(rating, 0), 5);
    const starContainer = document.createElement('div');
    starContainer.className = 'star-rating';
    starContainer.id = "data-score";

    const score = document.createElement("label");
    score.textContent = "Puntuación:";
    starContainer.appendChild(score);

    const stars = document.createElement('div');
    stars.classList.add("containerStars");

    for (let i = 1; i <= 5; i++) {
        
        if (i <= Math.floor(normalizedRating)) {
            // Estrella completa
            starContainer.innerHTML += getFullStar();
        } else if (i - normalizedRating <= 0.5) {
            // Media estrella
            starContainer.innerHTML += getHalfStar();
        } else {
            // Estrella vacía
            starContainer.innerHTML += getEmptyStar();
        }

    }

    return starContainer;
}

// Función para obtener SVG de estrella completa
function getFullStar() {
    return `
      <svg class="star" width="30" height="30" viewBox="0 0 24 24" fill="#f5b301" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
      </svg>
    `;
}

// Función para obtener SVG de media estrella
function getHalfStar() {
    return `
      <svg class="star" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="half-gradient">
            <stop offset="50%" stop-color="#f5b301"/>
            <stop offset="50%" stop-color="#ddd"/>
          </linearGradient>
        </defs>
        <path fill="url(#half-gradient)" d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
      </svg>
    `;
}

// Función para obtener SVG de estrella vacía
function getEmptyStar() {
    return `
      <svg class="star" width="30" height="30" viewBox="0 0 24 24" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
      </svg>
    `;
}


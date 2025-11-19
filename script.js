
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


function renderAnime() {
    const genres = Object.keys(animeData);

    genres.forEach(genre => {
        const container = document.getElementById(`${genre}-list`);
        if (!container) return;

        animeData[genre].forEach(item => {
            const card = document.createElement("div");
            card.classList.add("anime-card");

            card.innerHTML = `
                <div class="img-box">
                    <img src="${item.image}" alt="${item.title}">
                </div>

                <div class="hover-details">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div>  
                        <p>type : ${item.type}</p>
                        <p>episodes : ${item.episodes}</p>
                        <p><strong>Rating : <strong>${item.rating}</p>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    });
}

renderAnime();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Optional overlay
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close menu when clicking outside
overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});


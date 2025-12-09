function initCarousel() {

    if (window.carouselRan) return;

    const container = document.querySelector(".owl-carousel");
    if (!container) {
        setTimeout(initCarousel, 50);
        return;
    }

    window.carouselRan = true;

    const currentGame = document.body.dataset.game;
    const list = window.GAMES.filter(g => g.id !== currentGame);

    list.forEach(game => {
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <a class="carousel-card" href="${game.url}">
                <img src="${game.thumb}">
                <span>${game.name}</span>
            </a>
        `;
        container.appendChild(item);
    });

    // Initialise Owl
    $(container).owlCarousel({
        loop: true,
        rewind: true,
        margin: 20,
        nav: true,
        navText: ["⟵", "⟶"],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            900: { items: 3 }
        }
    });
}

window.addEventListener("gamesReady", initCarousel);

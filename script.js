const eventDate = new Date("July 25, 2026 05:40:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

const cards = document.querySelectorAll(
    ".card, .price-card, .btn, .actions a, .countdown, .hero p, .date-badge"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);
});

document.addEventListener(
    "mousemove",
    (e) => {

        const glow = document.querySelector(".bg-glow");

        const x = (e.clientX / window.innerWidth) * 100;

        const y = (e.clientY / window.innerHeight) * 100;

        glow.style.background =
        `
        radial-gradient(
            circle at ${x}% ${y}%,
            rgba(30,58,138,.25),
            transparent 25%
        ),
        radial-gradient(
            circle at top,
            rgba(15,23,42,.30),
            transparent 40%
        ),
        #020817
        `;
    }
);
const openPix = document.getElementById("openPix");
const closePix = document.getElementById("closePix");
const pixModal = document.getElementById("pixModal");
const copyPix = document.getElementById("copyPix");
const pixKey = document.getElementById("pixKey");

openPix.addEventListener("click", function(e){
    e.preventDefault();
    pixModal.classList.add("active");
});

closePix.addEventListener("click", function(){
    pixModal.classList.remove("active");
});

pixModal.addEventListener("click", function(e){
    if(e.target === pixModal){
        pixModal.classList.remove("active");
    }
});

copyPix.addEventListener("click", function(){
    navigator.clipboard.writeText(pixKey.innerText.trim());

    copyPix.innerText = "Chave copiada!";

    setTimeout(function(){
        copyPix.innerText = "Copiar chave PIX";
    }, 2000);
});

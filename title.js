// Промяна на заглавието на страницата при загуба и възстановяване на фокуса
document.addEventListener("blur",()=>{
    document.title = "Хей, върни се 😢"  // Ако потребителят напусне страницата, заглавието се сменя
})

document.addEventListener("focus",()=>{
    document.title = "Седем без десет" // Връща оригиналното заглавие при връщане на фокуса
})
document.addEventListener("DOMContentLoaded", function () {
    // 1. Анимация при скрол
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Добавя клас, когато елементът стане видим
            }
        });
    }, { threshold: 0.2 }); //Стартира анимацията, когато 20% от елемента са видими

    animatedElements.forEach(el => observer.observe(el));

    // 2. Бутон "Обратно нагоре"
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "⬆"; // Текстът на бутона
    scrollTopBtn.id = "scrollTopBtn"; // Добавяне на ID
    document.body.appendChild(scrollTopBtn); // Добавяне към страницата

    // Скролиране до горе при натискане
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    // Показване на бутона само ако скролът надвишава 300px
    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    // 3. Анимиран текстов банер
    const banner = document.getElementById("free-coffee-text");
    if (banner) {
        banner.innerHTML = "☕ Промоция: Вземи 2 кафета, плати 1! ☕"; // Смяна на текста в банера
    }
});

    // 4. Ефект за изскачащия текст
const text = "Добре дошли в Седем без десет! ☕";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Скоростта на пизисване
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

    // 5. Генериране на падащите кафе зърна
function createParticle() {
    const particle = document.createElement("img");
    particle.src = "coffee-bean.png"; // Път към изображението на кафе зърното
    particle.classList.add("particle"); // Добавяне на клас за стилове и анимация
    document.body.appendChild(particle); // Добавяне на зърното към страницата

    // Случайно разположение и размер
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = Math.random() * 3 + 2 + "s"; // Различна скорост на падане
    particle.style.width = Math.random() * 20 + 15 + "px"; // Различни размери

    // Премахване на зърното след завършване на анимацията
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// На всеки 300ms създава ново кафе зърно
setInterval(createParticle, 300);

// 6. Промоционален изкачащ прозорец
function showPopup() {
    document.getElementById("promo-popup").style.display = "block"; // Показване на промо банера
}

function closePopup() {
    document.getElementById("promo-popup").style.display = "none"; // Скриване на банера
}

setTimeout(showPopup, 5000); // Показва се след 5 секунди

const targetDate = new Date("2026-01-24T22:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  document.getElementById("days").textContent =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").textContent =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").textContent =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").textContent =
    Math.floor((distance / 1000) % 60);
}, 1000);

const eventoCard = document.querySelector('.evento-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      eventoCard.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

observer.observe(eventoCard);
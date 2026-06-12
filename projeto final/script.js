const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.querySelectorAll('.slide'));
let currentSlide = 0;
let autoRotate = true;
let rotationInterval = null;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startRotation() {
  if (rotationInterval) return;
  rotationInterval = setInterval(nextSlide, 5000);
  autoRotate = true;
}

function stopRotation() {
  clearInterval(rotationInterval);
  rotationInterval = null;
  autoRotate = false;
}

startRotation();

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('#gameCards .card');

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  let matchedSlideIndex = -1;

  cards.forEach((card) => {
    const name = card.dataset.name;
    card.style.display = name.includes(query) ? 'grid' : 'none';
  });

  if (query) {
    slides.forEach((slide, index) => {
      const name = slide.dataset.name || '';
      if (name.includes(query)) {
        matchedSlideIndex = index;
      }
    });
  }

  if (matchedSlideIndex >= 0) {
    showSlide(matchedSlideIndex);
    stopRotation();
  } else {
    if (!autoRotate) {
      startRotation();
    }
  }
});

const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('open');
  });
});

const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();

  if (!name || !email || !phone) {
    formMessage.textContent = 'Por favor, preencha todos os campos para participar.';
    formMessage.style.color = '#ff7b7b';
    return;
  }

  formMessage.textContent = `Obrigado, ${name}! Sua inscri��o foi recebida.`;
  formMessage.style.color = '#8bf2b4';
  form.reset();
});

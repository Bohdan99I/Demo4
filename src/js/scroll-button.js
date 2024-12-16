const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показати або приховати кнопку при прокручуванні
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Прокрутка нагору при натисканні на кнопку
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

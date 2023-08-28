
function mostrarMensajeInicial() {
  if (confirm('Este sitio esta en desarrollo, tenga pacienciaa')) {
    alert('Gracias por ver');
  } else {
    alert('...');
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  })
  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, 
    autoplay: {
      delay: 2000, 
    },
    pagination: {
      el: ".swiper-pagination", 
    },
  });
});
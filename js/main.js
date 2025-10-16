  document.querySelectorAll('.carousel').forEach(carousel => {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 2500, // cambia cada 2 segundos
      pause: false
    });

    // Cuando el usuario pasa el mouse, inicia el movimiento
    carousel.addEventListener('mouseenter', () => bsCarousel.cycle());

    // Cuando el mouse sale, se detiene
    carousel.addEventListener('mouseleave', () => bsCarousel.pause());
  });
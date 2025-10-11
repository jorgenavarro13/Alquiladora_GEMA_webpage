ç
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const numeroDestino = "+527713266491"; // tu número con clave de país (52 = México)
  const texto = `Hola, soy ${nombre}. Tel: ${telefono}. ${mensaje}`;
  const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
  this.reset();
});
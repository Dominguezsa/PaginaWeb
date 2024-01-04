let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString('Creando soluciones')
  .pauseFor(500)
  .deleteChars(10)
  .start();

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggleButton');
  var navbarCollapse = document.getElementById('navbarSupportedContent');
  var navLinks = navbarCollapse.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        toggleButton.click();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

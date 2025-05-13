// BARRA DE NAVEGACIÓN 

 const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-opacity-30");
      navbar.classList.add("bg-opacity-100");
    } else {
      navbar.classList.remove("bg-opacity-100");
      navbar.classList.add("bg-opacity-30");
    }
  });

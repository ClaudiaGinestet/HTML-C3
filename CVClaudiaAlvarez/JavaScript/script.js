
function showContactConfirmation() {
    const contactSection = document.getElementById('contact');

    // Crear un elemento de mensaje
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = '¡Gracias por contactarme!';

    // Insertar el mensaje después de la sección de contacto
    contactSection.insertAdjacentElement('afterend', confirmationMessage);

    // Después de 3 segundos, eliminar el mensaje
    setTimeout(() => {
        confirmationMessage.remove();
    }, 3000);
}

function changeHeaderColorOnHover() {
    const header = document.querySelector('header');

    header.addEventListener('mouseover', function () {
        header.style.color = '#cc3333';
    });

    header.addEventListener('mouseout', function () {
        header.style.color = '#333';
    });
}

window.onload = function () {
    // ... (otras llamadas de funciones) ...
    changeHeaderColorOnHover();
};

function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });

            // Cierra la barra de navegación después de hacer clic
            toggleNav();
        });
    });
}

window.onload = function () {
    // ... (otras llamadas de funciones) ...
    changeHeaderColorOnHover();
    addSmoothScrolling();
};

function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.querySelector('.navbar-toggler');

    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
        navToggle.innerHTML = '&#9776; Menú';
    } else {
        navLinks.style.display = 'flex';
        navToggle.innerHTML = '&times; Cerrar';
    }
}
function redirigirGitHub() {
    
    window.open('https://github.com/ClaudiaGinestet/HTML-C3', '_blank');
  }
  function redirigirLinkedIn() {
    
    window.open('https://www.linkedin.com/in/claudia-alvarez-ginestet-93206a261/', '_blank');
  }

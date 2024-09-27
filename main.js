// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         document.body.classList.toggle('no-scroll'); // Agrega esta línea
//     });
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
//     const links = navLinks.querySelectorAll('a'); // Selecciona todos los enlaces

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         document.body.classList.toggle('no-scroll');
//     });

//     links.forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active'); // Cierra el menú
//             document.body.classList.remove('no-scroll'); // Habilita el scroll
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
//     const links = navLinks.querySelectorAll('a');

//     const navbarHeight = document.querySelector('.navbar').offsetHeight; // Altura de la navbar

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         document.body.classList.toggle('no-scroll');
//     });

//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault(); // Previene el comportamiento por defecto

//             const targetId = link.getAttribute('href'); // Obtiene el href
//             const targetSection = document.querySelector(targetId); // Selecciona la sección correspondiente

//             // Calcula la posición de scroll considerando la altura de la navbar
//             const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

//             // Realiza el scroll suave
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth' // Añade un scroll suave
//             });

//             navLinks.classList.remove('active'); // Cierra el menú
//             document.body.classList.remove('no-scroll'); // Habilita el scroll
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar'); // Selecciona la navbar
    const links = navLinks.querySelectorAll('a');

    const navbarHeight = navbar.offsetHeight; // Altura de la navbar

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        navbar.classList.toggle('active'); // Agrega esta línea
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto

            const targetId = link.getAttribute('href'); // Obtiene el href
            const targetSection = document.querySelector(targetId); // Selecciona la sección correspondiente

            // Calcula la posición de scroll considerando la altura de la navbar
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

            // Realiza el scroll suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Añade un scroll suave
            });

            navLinks.classList.remove('active'); // Cierra el menú
            document.body.classList.remove('no-scroll'); // Habilita el scroll
            navbar.classList.remove('active'); // Elimina la clase al cerrar
        });
    });
});



(function() {
    emailjs.init('D9ohq1cBqCzmFWTkb');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    const firstName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    if (firstName === '') {
        document.getElementById('error-first-name').textContent = 'Este campo es obligatorio.';
        document.getElementById('first-name').classList.add('error');
        isValid = false;
    }
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('error-email').textContent = 'Por favor ingrese un email válido.';
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    if (phone === '' || !/^\+?\d{1,3}?[-.\s]?(\d{10})$/.test(phone)) {
        document.getElementById('error-phone').textContent = 'Por favor ingrese un número de teléfono válido, que puede incluir el prefijo de país.';
        document.getElementById('phone').classList.add('error');
        isValid = false;
    }

    if (isValid) {
        emailjs.send('service_o9thf3v', 'template_bqh8jsb', {
            firstName: firstName,
            email: email,
            phone: phone,
            to_name: 'MAMBO',
            from_name: firstName
        }, 'D9ohq1cBqCzmFWTkb')
        .then(function(response) {
            console.log('Correo enviado con éxito:', response);
        })
        .catch(function(error) {
            console.error('Error al enviar el correo:', error);
        });
    }
});

document.querySelector('label[for="phone"]').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput.value === 'Ejemplo: +56976840114') {
        phoneInput.value = '';
    }
});

document.querySelector('label[for="email"]').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    if (emailInput.value === 'Ejemplo: adress@mail.com') {
        emailInput.value = '';
    }
});
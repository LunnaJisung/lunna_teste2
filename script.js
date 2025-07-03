document.addEventListener('DOMContentLoaded', function() {
    // Efeito de scroll no cabeçalho
    const header = document.querySelector('.floating-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.innerHTML = mainNav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Scroll suave
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Carregar planetas dinamicamente
    const planets = [
        { name: "Mercúrio", image: "img1.jpeg", desc: "O planeta mais próximo do Sol" },
        { name: "Vênus", image: "img2.jpeg", desc: "Planeta mais quente do sistema solar" },
        { name: "Terra", image: "img3.jpeg", desc: "Nosso lar no universo" },
        { name: "Marte", image: "img4.jpeg", desc: "O planeta vermelho" },
        { name: "Júpiter", image: "img5.jpeg", desc: "O gigante gasoso" },
        { name: "Saturno", image: "img6.jpeg", desc: "Rei dos anéis" },
        { name: "Urano", image: "img7.jpeg", desc: "O planeta inclinado" },
        { name: "Netuno", image: "img8.jpeg", desc: "O planeta mais ventoso" }
    ];

    const planetGrid = document.querySelector('.planet-grid');
    
    planets.forEach(planet => {
        const planetCard = document.createElement('div');
        planetCard.className = 'planet-card';
        planetCard.innerHTML = `
            <img src="${planet.image}" alt="${planet.name}" class="planet-image">
            <div class="planet-info">
                <h3>${planet.name}</h3>
                <p>${planet.desc}</p>
                <button class="explore-button">Explorar <i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        planetGrid.appendChild(planetCard);
    });

    // Efeito de hover nos cards de planetas
    const planetCards = document.querySelectorAll('.planet-card');
    planetCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });

    // Botão CTA
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Prepare-se para decolar! 🚀');
        ctaButton.innerHTML = 'Decolando... <i class="fas fa-rocket"></i>';
        setTimeout(() => {
            ctaButton.innerHTML = 'Iniciar Jornada <i class="fas fa-arrow-right"></i>';
        }, 2000);
    });
});


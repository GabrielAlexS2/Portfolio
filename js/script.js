/**
 * Script Principal do Portfólio - Gabriel Marques
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile (Hamburguer)
    initMobileMenu();

    // 2. Animações de Revelação Simples (Intersection Observer)
    initScrollReveal();

    // 3. Animações GSAP e Parallax (somente se GSAP estiver disponível)
    initGSAPAnimations();
});

/**
 * Inicializa o menu mobile e o botão de voltar
 */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger-icon');
    const close = document.getElementById('close-icon');
    const backBtn = document.getElementById('mobile-back-btn');

    if (btn && menu) {
        const toggleMenu = () => {
            menu.classList.toggle('translate-x-full');
            hamburger.classList.toggle('hidden');
            close.classList.toggle('hidden');
        };

        btn.addEventListener('click', toggleMenu);

        if (backBtn) {
            backBtn.addEventListener('click', toggleMenu);
        }

        // Fecha o menu ao clicar em qualquer link
        const navLinks = menu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }
}

/**
 * Configura o Intersection Observer para revelar elementos ao scrollar
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Configura animações GSAP avançadas e efeitos de Parallax
 * Ativo apenas na página index.html (onde existe #statement-section)
 */
function initGSAPAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();
        const statementSection = document.getElementById('statement-section');

        if (statementSection) {
            // Animações para Desktop (telas maiores que 768px)
            mm.add("(min-width: 768px)", () => {
                // Efeito Parallax na imagem de fundo
                gsap.to(".parallax-bg", {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: statementSection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Fade-in estático e gradativo para o texto
                gsap.from(".parallax-text", {
                    opacity: 0,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: statementSection,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Animações para Mobile (telas menores que 767px)
            mm.add("(max-width: 767px)", () => {
                // Timeline com fixação (pin) — conteúdo aparece um a um durante o scroll
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: statementSection,
                        start: "top top",
                        end: "+=150%",
                        pin: true,
                        scrub: 1
                    }
                });

                // Surgimento sequencial dos elementos
                tl.from(".parallax-text h2", { opacity: 0, duration: 1 })
                  .from(".parallax-text p",  { opacity: 0, duration: 1 })
                  .from(".parallax-mobile-img", { opacity: 0, duration: 1 });
            });
        }
    }
}

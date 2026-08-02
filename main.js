/* ════════════════════════════════════════════════════════
   SCRIPTS E LÓGICA DE ALTA CONVERSÃO — TREINO INTELIGENTE
════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // 1. NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 1.1 BARRA FIXA MOBILE FLUTUANTE (STICKY CTA BAR FOR MOBILE)
    const mobileStickyBar = document.getElementById('mobile-sticky-bar');
    if (mobileStickyBar) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 768) {
                if (window.scrollY > 350) {
                    mobileStickyBar.classList.add('visible');
                } else {
                    mobileStickyBar.classList.remove('visible');
                }
            } else {
                mobileStickyBar.classList.remove('visible');
            }
        });
    }

    // 2. COUNTDOWN TIMER (REGRESSIVO PERMANENTE DE 15 MINUTOS)
    function startCountdown(durationMinutes) {
        let timerKey = 'treino_inteligente_cd_end';
        let endTime = localStorage.getItem(timerKey);

        if (!endTime || new Date().getTime() > parseInt(endTime, 10)) {
            endTime = new Date().getTime() + durationMinutes * 60 * 1000;
            localStorage.setItem(timerKey, endTime);
        }

        const minEl = document.getElementById('cd-min');
        const secEl = document.getElementById('cd-sec');

        function updateTimer() {
            const now = new Date().getTime();
            const distance = parseInt(endTime, 10) - now;

            if (distance <= 0) {
                // Reinicia para mais 15 min para manter a escassez
                endTime = new Date().getTime() + durationMinutes * 60 * 1000;
                localStorage.setItem(timerKey, endTime);
            }

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (minEl) minEl.textContent = minutes.toString().padStart(2, '0');
            if (secEl) secEl.textContent = seconds.toString().padStart(2, '0');
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }
    startCountdown(15);

    // 3. FAQ ACCORDION
    const faqQuestions = document.querySelectorAll('.faq-q');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');

            // Fechar todos
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

            // Abrir o clicado se não estava aberto
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // 4. DEMO VSL VIDEO SIMULATOR CLICK
    const vslTrigger = document.getElementById('vsl-trigger');
    if (vslTrigger) {
        vslTrigger.addEventListener('click', () => {
            const overlay = vslTrigger.querySelector('.vsl-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }
        });
    }

    // 5. SOCIAL PROOF LIVE TOAST NOTIFICATIONS (NOTIFICAÇÕES DE COMPRA AO VIVO - 35 NOMES SEM REPETIÇÃO)
    const recentBuyers = [
        { name: "Lucas M.", city: "São Paulo - SP", time: "há 2 minutos" },
        { name: "Patrícia K.", city: "Curitiba - PR", time: "há 4 minutos" },
        { name: "Gabriel S.", city: "Belo Horizonte - MG", time: "há 1 minuto" },
        { name: "Juliana R.", city: "Rio de Janeiro - RJ", time: "há 6 minutos" },
        { name: "Diego F.", city: "Porto Alegre - RS", time: "há 3 minutos" },
        { name: "Camila B.", city: "Brasília - DF", time: "há 5 minutos" },
        { name: "Matheus V.", city: "Salvador - BA", time: "há 2 minutos" },
        { name: "Fernanda T.", city: "Campinas - SP", time: "há 3 minutos" },
        { name: "Rodrigo P.", city: "Fortaleza - CE", time: "há 7 minutos" },
        { name: "Aline M.", city: "Florianópolis - SC", time: "há 1 minuto" },
        { name: "Thiago H.", city: "Goiânia - GO", time: "há 4 minutos" },
        { name: "Beatriz L.", city: "Recife - PE", time: "há 2 minutos" },
        { name: "Felipe O.", city: "Vitória - ES", time: "há 8 minutos" },
        { name: "Vanessa C.", city: "Manaus - AM", time: "há 5 minutos" },
        { name: "Bruno D.", city: "Santo André - SP", time: "há 3 minutos" },
        { name: "Priscila N.", city: "Niterói - RJ", time: "há 1 minuto" },
        { name: "Marcelo A.", city: "Belém - PA", time: "há 6 minutos" },
        { name: "Tatiane G.", city: "Uberlândia - MG", time: "há 4 minutos" },
        { name: "Leandro B.", city: "São José dos Campos - SP", time: "há 2 minutos" },
        { name: "Jessica R.", city: "Maringá - PR", time: "há 5 minutos" },
        { name: "Renato K.", city: "Campo Grande - MS", time: "há 3 minutos" },
        { name: "Débora S.", city: "Sorocaba - SP", time: "há 1 minuto" },
        { name: "Eduardo F.", city: "Caxias do Sul - RS", time: "há 4 minutos" },
        { name: "Letícia M.", city: "João Pessoa - PB", time: "há 7 minutos" },
        { name: "Alexandre T.", city: "Cuiabá - MT", time: "há 2 minutos" },
        { name: "Rafaela V.", city: "Natal - RN", time: "há 5 minutos" },
        { name: "Vinícius C.", city: "Ribeirão Preto - SP", time: "há 3 minutos" },
        { name: "Sabrina P.", city: "Joinville - SC", time: "há 6 minutos" },
        { name: "André L.", city: "Maceió - AL", time: "há 1 minuto" },
        { name: "Carolina H.", city: "Santos - SP", time: "há 4 minutos" },
        { name: "Daniela E.", city: "Teresina - PI", time: "há 2 minutos" },
        { name: "Guilherme B.", city: "Londrina - PR", time: "há 5 minutos" },
        { name: "Isabela F.", city: "Juiz de Fora - MG", time: "há 3 minutos" },
        { name: "Caio R.", city: "Santarém - PA", time: "há 6 minutos" },
        { name: "Renata D.", city: "Vila Velha - ES", time: "há 2 minutos" }
    ];

    const toastContainer = document.getElementById('toast-container');
    let currentBuyerIndex = 0;
    // Embaralha a lista ao carregar a página para variação natural
    const shuffledBuyers = [...recentBuyers].sort(() => Math.random() - 0.5);

    function showRandomSalesToast() {
        if (!toastContainer) return;

        const buyer = shuffledBuyers[currentBuyerIndex];
        currentBuyerIndex = (currentBuyerIndex + 1) % shuffledBuyers.length;

        const toast = document.createElement('div');
        toast.className = 'toast-sales';
        toast.innerHTML = `
            <div class="toast-icon-check">✓</div>
            <div class="toast-info">
                <p><strong>${buyer.name}</strong> (${buyer.city}) garantiu o Pack!</p>
                <span>Inscrição confirmada ${buyer.time}</span>
            </div>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    }

    // Dispara a primeira notificação aos 4s e depois a cada 16s
    setTimeout(showRandomSalesToast, 4000);
    setInterval(showRandomSalesToast, 16000);

    // 6. META PIXEL INITIATE CHECKOUT TRACKING HOOK
    const checkoutButtons = document.querySelectorAll('a[href*="cakto"]');
    checkoutButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout', {
                    content_name: 'Pack Treino Inteligente',
                    value: 14.90,
                    currency: 'BRL'
                });
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Telemetry Status Simulation
    const statusText = document.getElementById('status-text');
    const statusDot = document.querySelector('.status-dot');

    if (statusDot && statusText) {
        setTimeout(() => {
            statusDot.style.background = '#10b981';
            statusDot.style.boxShadow = '0 0 8px #10b981';
            
            setInterval(() => {
                const simulatedPing = Math.floor(Math.random() * (45 - 12) + 12);
                statusText.innerText = `THRAX CORE: OPERATIONAL // LATENCY: ${simulatedPing}MS`;
            }, 2000);
        }, 1500);
    }

    // 2. Main Contact Form Intercept Script
    const contactForm = document.getElementById('console-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('.submit-btn');
            
            if(submitButton) {
                submitButton.innerText = "TRANSMITTING DATA PACKETS...";
                submitButton.style.opacity = "0.7";
            }

            fetch(contactForm.getAttribute('action'), {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    const popup = document.getElementById('intel-success-popup');
                    if(popup) popup.classList.add('popup-active');
                    contactForm.reset();
                    setTimeout(() => {
                        if(popup) popup.classList.remove('popup-active');
                    }, 4000);
                } else {
                    alert("Transmission error. Check form configuration parameters.");
                }
            })
            .catch(() => alert("Secure link interrupted. System offline."))
            .finally(() => {
                if(submitButton) {
                    submitButton.innerText = "INITIALIZE RISK ADVISORY BRIEFING";
                    submitButton.style.opacity = "1";
                }
            });
        });
    }

    // 3. Field Audit Form Intercept Script
    const auditForm = document.querySelector('.audit-intake-form');
    if (auditForm) {
        auditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(auditForm);
            const submitButton = auditForm.querySelector('.audit-submit');
            
            if(submitButton) {
                submitButton.innerText = "DEPLOYING GROUND INTEL OPERATIVES...";
                submitButton.style.opacity = "0.7";
            }

            fetch(auditForm.getAttribute('action') || 'https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    const popup = document.getElementById('intel-success-popup');
                    if(popup) popup.classList.add('popup-active');
                    auditForm.reset();
                    setTimeout(() => {
                        if(popup) popup.classList.remove('popup-active');
                    }, 4000);
                } else {
                    alert("Audit routing response mismatch.");
                }
            })
            .catch(() => alert("Secure connection loss. Deployment offline."))
            .finally(() => {
                if(submitButton) {
                    submitButton.innerText = "DEPLOY FIELD INTELLIGENCE OPERATION";
                    submitButton.style.opacity = "1";
                }
            });
        });
    }
});

// 4. Global Mobile Menu Controller Function (Kept global for inline onclick handlers)
function toggleNavMatrix() {
    const navLinks = document.getElementById('nav-links-container');
    const menuIcon = document.getElementById('menu-icon');
    
    if (navLinks) {
        navLinks.classList.toggle('nav-active');
        if (menuIcon) {
            if (navLinks.classList.contains('nav-active')) {
                menuIcon.style.transform = "rotate(90deg)";
                menuIcon.style.color = "var(--accent-neon)";
            } else {
                menuIcon.style.transform = "rotate(0deg)";
                menuIcon.style.color = "var(--text-muted)";
            }
        }
    }
}

// ==========================================================================
// THRAX ANALYTICS | Global Production Core Architecture
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    /* MODULE 1: GLOBAL SIDE DRAWER NAVIGATION MATRIX */
    const triggerBtn = document.getElementById('panel-trigger-btn');
    const closeBtn = document.getElementById('panel-close-btn');
    const sideDrawer = document.getElementById('global-side-drawer');
    const overlayShield = document.getElementById('global-drawer-overlay');
    const triggerIcon = document.getElementById('panel-trigger-icon');

    // Function loop rules to slide panel in
    if (triggerBtn && sideDrawer && overlayShield) {
        triggerBtn.addEventListener('click', () => {
            sideDrawer.classList.add('drawer-active');
            overlayShield.classList.add('shield-active');
            if (triggerIcon) triggerIcon.style.transform = "rotate(90deg)";
        });
    }

    // Function loop rules to slide panel out
    const closeDrawerMatrix = () => {
        if (sideDrawer) sideDrawer.classList.remove('drawer-active');
        if (overlayShield) overlayShield.classList.remove('shield-active');
        if (triggerIcon) triggerIcon.style.transform = "rotate(0deg)";
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawerMatrix);
    if (overlayShield) overlayShield.addEventListener('click', closeDrawerMatrix);

    /* MODULE 2: LIVE TELEMETRY STATUS SIMULATION */
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

    /* MODULE 3: MAIN CONSULTATION INTAKE GATEWAY (Web3Forms Intercept) */
    const contactForm = document.getElementById('console-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('.submit-btn');
            
            if (submitButton) {
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
                    if (popup) popup.classList.add('popup-active');
                    contactForm.reset();
                    setTimeout(() => {
                        if (popup) popup.classList.remove('popup-active');
                    }, 4000);
                } else {
                    alert("Transmission error. Check form configuration parameters.");
                }
            })
            .catch(() => alert("Secure link interrupted. System offline."))
            .finally(() => {
                if (submitButton) {
                    submitButton.innerText = "INITIALIZE RISK ADVISORY BRIEFING";
                    submitButton.style.opacity = "1";
                }
            });
        });
    }

    /* MODULE 4: TIER-3 FIELD AUDIT INTAKE ROUTING */
    const auditForm = document.querySelector('.audit-intake-form');
    if (auditForm) {
        auditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(auditForm);
            const submitButton = auditForm.querySelector('.audit-submit');
            
            if (submitButton) {
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
                    if (popup) popup.classList.add('popup-active');
                    auditForm.reset();
                    setTimeout(() => {
                        if (popup) popup.classList.remove('popup-active');
                    }, 4000);
                } else {
                    alert("Audit routing response mismatch.");
                }
            })
            .catch(() => alert("Secure connection loss. Deployment offline."))
            .finally(() => {
                if (submitButton) {
                    submitButton.innerText = "DEPLOY FIELD INTELLIGENCE OPERATION";
                    submitButton.style.opacity = "1";
                }
            });
        });
    }
});
// ==========================================================================
// THRAX SYSTEMS | VIEWPORT SCROLL & HEADER DIRECTION TRACKING
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Select your header layer (matches the class inside your CSS)
    const header = document.querySelector("header") || document.querySelector(".header-container") || document.querySelector(".site-header");
    
    if (!header) return; // Fail-safe if header class isn't detected on a specific subpage

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // 1. If scrolling down and past the threshold, tuck the header away
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            header.classList.add("header-hidden");
        } 
        // 2. If scrolling up, bring the header instantly back into operational view
        else {
            header.classList.remove("header-hidden");
        }

        // 3. Add background depth shading if page is scrolled off the dead top
        if (currentScrollY > 20) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }

        lastScrollY = currentScrollY;
    });
});
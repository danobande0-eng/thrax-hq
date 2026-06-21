document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const statusDot = document.querySelector('.status-dot');

    // Simulate system diagnostic sequence on load
    setTimeout(() => {
        if(statusDot && statusText) {
            statusDot.style.background = '#10b981'; // Switch to active operational green
            statusDot.style.boxShadow = '0 0 8px #10b981';
            
            // Continuous loop running live telemetry simulation
            setInterval(() => {
                const simulatedPing = Math.floor(Math.random() * (45 - 18 + 1)) + 18;
                statusText.innerText = `THRAX CORE: OPERATIONAL // LATENCY: ${simulatedPing}ms`;
            }, 2000);
        }
    }, 1500);
});
// Form Intercept Script
    const contactForm = document.getElementById('console-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page refresh
            
            const submitBtn = document.querySelector('.form-submit-btn');
            const originalText = submitBtn.innerText;
            
            // Visual feedback loop mimicking deployment uplink
            submitBtn.innerText = "TRANSMITTING DATA UPLINK...";
            submitBtn.style.background = "#f59e0b"; // Switch to active amber
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerText = "TRANSMISSION SECURED // PIPELINE INITIALIZED";
                submitBtn.style.background = "#10b981"; // Switch to success green
                contactForm.reset(); // Clear input boxes
                
                // Revert interface state back to normal after a brief delay
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.background = "var(--accent-blue)";
                    submitBtn.disabled = false;
                }, 4000);
            }, 2000);
        });
    }
    // Toggle Functionality for Thrax Analytics Dropdown Matrix
function toggleNavMatrix() {
    var navContainer = document.getElementById("nav-links-container");
    var menuIcon = document.getElementById("menu-icon");
    
    // Toggle the display class
    navContainer.classList.toggle("matrix-active");
    
    // Smoothly shift icon design to show it is active
    if(navContainer.classList.contains("matrix-active")) {
        menuIcon.className = "fas fa-times"; // Changes to a close "X" symbol
    } else {
        menuIcon.className = "fas fa-th-large"; // Snaps back to standard matrix grid
    }
}
// Intercept Form Submission, Send Email & Display Fading Custom Alert
// Intercept Form Submission, Send Email & Display Fading Custom Alert
const corporateForm = document.querySelector('.corporate-intake-form');

if (corporateForm) {
    corporateForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from hard-reloading

        const formData = new FormData(corporateForm);
        const submitButton = corporateForm.querySelector('.corporate-submit');
        
        // Visual indicator that system is transmitting data
        submitButton.innerText = "TRANSMITTING BRIEF...";
        submitButton.style.opacity = "0.6";

        // Fallback target link in case the DOM attribute reads blank
        const targetUrl = corporateForm.getAttribute('action') || 'https://api.web3forms.com/submit';

        // Asynchronously post data to Web3Forms link
        fetch(targetUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Trigger the interactive Success Pop-Up
                const popup = document.getElementById('intel-success-popup');
                popup.classList.add('popup-active');

                // Reset the form values for clean slate
                corporateForm.reset();

                // Automatically dissolve the pop-up after exactly 4 seconds
                setTimeout(() => {
                    popup.classList.remove('popup-active');
                }, 4000);
            } else {
                alert("Transmission pipeline response error. Please check form values.");
            }
        })
        .catch(error => {
            console.error("Transmission Error Stack:", error);
            alert("Secure connection loss. Transmission failed.");
        })
        .finally(() => {
            // Restore button text
            submitButton.innerText = "INITIALIZE RISK ADVISORY BRIEFING";
            submitButton.style.opacity = "1";
        });
    });
}
// Intercept Audit Form Submission, Send Email & Display Fading Custom Alert
const auditForm = document.querySelector('.audit-intake-form');

if (auditForm) {
    auditForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from hard-reloading

        const formData = new FormData(auditForm);
        const submitButton = auditForm.querySelector('.audit-submit');
        
        // Visual indicator that system is transmitting data
        submitButton.innerText = "DEPLOYING GROUND INTEL OPERATIVES...";
        submitButton.style.opacity = "0.7";

        const targetUrl = auditForm.getAttribute('action') || 'https://api.web3forms.com/submit';

        // Asynchronously post data to Web3Forms link
        fetch(targetUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Trigger the interactive Success Pop-Up
                const popup = document.getElementById('intel-success-popup');
                popup.classList.add('popup-active');

                // Reset the form values for clean slate
                auditForm.reset();

                // Automatically dissolve the pop-up after exactly 4 seconds
                setTimeout(() => {
                    popup.classList.remove('popup-active');
                }, 4000);
            } else {
                alert("Audit routing response mismatch. Please review input attributes.");
            }
        })
        .catch(error => {
            console.error("Audit Transmission Error Stack:", error);
            alert("Secure connection loss. Ground intelligence deployment offline.");
        })
        .finally(() => {
            // Restore button text
            submitButton.innerText = "DEPLOY FIELD INTELLIGENCE OPERATION";
            submitButton.style.opacity = "1";
        });
    });
}
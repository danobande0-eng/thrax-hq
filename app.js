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
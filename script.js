// Traditional Gujarati Wedding Website JavaScript

// Countdown Timer Functionality
let lastCountdown = {days: null, hours: null, minutes: null, seconds: null};
function updateCountdown() {
    // Set the target date to November 23, 2025 (the second wedding date)
    const targetDate = new Date('November 23, 2025 11:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        // Future date - show countdown
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Animate countdown numbers if changed
        ['days','hours','minutes','seconds'].forEach((unit) => {
            if (lastCountdown[unit] !== null && lastCountdown[unit] !== eval(unit)) {
                const el = document.getElementById(unit);
                if (el) {
                    el.classList.remove('bounce');
                    void el.offsetWidth; // trigger reflow
                    el.classList.add('bounce');
                }
            }
            lastCountdown[unit] = eval(unit);
        });

        // Update the countdown display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else if (timeDifference === 0) {
        // Wedding day has arrived!
        document.getElementById('countdown').innerHTML = `
            <div class="wedding-day-message">
                <h3>🎉 આજે લગ્નનો દિવસ છે! 🎉</h3>
                <p>શુભ લગ્ન!</p>
            </div>
        `;
    } else {
        // Past date - hide the entire countdown section
        const countdownSection = document.querySelector('.countdown-section');
        if (countdownSection) {
            countdownSection.style.display = 'none';
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call



// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some traditional Gujarati wedding music (optional)
function playBackgroundMusic() {
    // This would be implemented with actual audio files
    console.log('🎵 Traditional Gujarati wedding music would play here 🎵');
}

// Add floating flower petals effect
function createFloatingPetals() {
    const petals = ['🌸', '🌺', '🌼', '🌻', '🌹'];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = '-20px';
        petal.style.fontSize = (18 + Math.random() * 22) + 'px';
        petal.style.opacity = '0';
        petal.style.pointerEvents = 'none';
        petal.style.zIndex = '1000';
        petal.style.animation = `float 6s linear forwards, fadeInPetal 1.2s ease-in`;
        petal.style.animationDelay = `${Math.random()}s, 0s`;
        document.body.appendChild(petal);
        // Fade in
        setTimeout(() => { petal.style.opacity = '1'; }, 100);
        // Remove petal after animation
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 6000);
    }, 1200); // More frequent
}

// Add floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    @keyframes fadeInPetal {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .wedding-day-message {
        text-align: center;
        padding: 2rem;
        background: linear-gradient(135deg, #d4af37, #ffd700);
        border-radius: 15px;
        color: #fff;
        animation: pulse 2s infinite;
    }
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    .countdown-number.bounce {
        animation: bounceNum 0.5s;
    }
    @keyframes bounceNum {
        0% { transform: scale(1); }
        30% { transform: scale(1.3); }
        60% { transform: scale(0.9); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize floating petals effect
createFloatingPetals();

// Add scroll reveal effect
function revealOnScroll() {
    const elements = document.querySelectorAll('.prayer-section, .traditional-invitation-section, .schedule-section, .venue-section, .countdown-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}

// Initialize scroll reveal
revealOnScroll();

// Add traditional Gujarati wedding greeting
function showWelcomeMessage() {
    const welcomeMessages = [
        'સ્વાગત છે! 🙏',
        'આપનું આમંત્રણ છે! 🕉️',
        'શુભ લગ્ન! 💑',
        'આશીર્વાદ સાથે! 🌺'
    ];
    
    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    
    // Create a temporary welcome message
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = randomMessage;
    welcomeDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #d4af37, #ffd700);
        color: #fff;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.5s ease-out;
    `;
    
    document.body.appendChild(welcomeDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        welcomeDiv.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            if (welcomeDiv.parentNode) {
                welcomeDiv.parentNode.removeChild(welcomeDiv);
            }
        }, 500);
    }, 3000);
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);

// Show welcome message after page loads
setTimeout(showWelcomeMessage, 1000); 

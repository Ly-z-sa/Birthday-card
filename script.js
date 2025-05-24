document.addEventListener('DOMContentLoaded', () => {
    const confettiHeartsLayer = document.getElementById('confettiHeartsLayer');
    const envelopeStage = document.getElementById('envelopeStage');
    const envelope = document.getElementById('envelope');
    const envelopeFlap = document.getElementById('envelopeFlap');
    const cardOuterStage = document.getElementById('cardOuterStage');
    const cardInnerStage = document.getElementById('cardInnerStage');

    const numberOfConfetti = 80;
    const numberOfHearts = 25;
    const confettiColors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color-1)', 'var(--accent-color-2)', '#f48fb1', '#ce93d8', '#ffe082'];

    function createConfetti(delay) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.setProperty('--start-x', `${(Math.random() - 0.5) * 200}px`);
        confetti.style.setProperty('--end-x', `${(Math.random() - 0.5) * 300}px`);
        confettiHeartsLayer.appendChild(confetti);
    }

    function createHeart(delay) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.setProperty('--start-x', `${(Math.random() - 0.5) * 150}px`);
        heart.style.setProperty('--end-x', `${(Math.random() - 0.5) * 250}px`);
        confettiHeartsLayer.appendChild(heart);
    }

    function initConfettiAndHearts() {
        for (let i = 0; i < numberOfConfetti; i++) {
            createConfetti(i * (4 / numberOfConfetti));
        }
        for (let i = 0; i < numberOfHearts; i++) {
            createHeart(i * (3 / numberOfHearts));
        }
    }

    function transitionStages(currentStage, nextStage, animationClass = '') {
        currentStage.classList.remove('active');
        if (animationClass) {
            currentStage.classList.add(animationClass);
        }
        setTimeout(() => {
            if (animationClass) {
                currentStage.classList.remove(animationClass);
            }
            nextStage.classList.add('active');
        }, 600);
    }

    envelopeStage.addEventListener('click', () => {
        envelope.classList.add('open');
        setTimeout(() => {
            transitionStages(envelopeStage, cardOuterStage);
        }, 800);
    });

    cardOuterStage.addEventListener('click', () => {
        transitionStages(cardOuterStage, cardInnerStage);
    });

    initConfettiAndHearts();
});
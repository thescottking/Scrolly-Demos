document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.scrolly__step');
  const panels = document.querySelectorAll('.scrolly__panel');

  if (!steps.length || !panels.length) return;

  let currentStep = '1';

  function activateStep(stepIndex) {
    if (stepIndex === currentStep) return;
    currentStep = stepIndex;

    steps.forEach((s) => s.classList.remove('is-active'));
    panels.forEach((p) => p.classList.remove('is-active'));

    const step = document.querySelector(`.scrolly__step[data-step="${stepIndex}"]`);
    const panel = document.querySelector(`.scrolly__panel[data-panel="${stepIndex}"]`);

    if (step) step.classList.add('is-active');
    if (panel) panel.classList.add('is-active');

    // Handle chat bubbles for panel 1
    if (stepIndex === '1') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 2
    if (stepIndex === '2') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 3
    if (stepIndex === '3') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 4
    if (stepIndex === '4') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 5
    if (stepIndex === '5') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 6
    if (stepIndex === '6') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
    // Handle chat bubbles for panel 7
    if (stepIndex === '7') {
      const bubbles = panel.querySelectorAll('.chat-bubble');
      bubbles.forEach((bubble, index) => {
        if (index === 0) bubble.classList.remove('chat-bubble--hidden');
        else bubble.classList.add('chat-bubble--hidden');
      });
    }
  }

  function findClosestStep() {
    const viewportCenter = window.innerHeight / 2;
    let closest = null;
    let maxTop = -Infinity;

    steps.forEach((step) => {
      const rect = step.getBoundingClientRect();
      if (rect.top <= viewportCenter && rect.top > maxTop) {
        maxTop = rect.top;
        closest = step.dataset.step;
      }
    });

    // If no step found (e.g., scrolled past all), activate the last step
    if (!closest && steps.length > 0) {
      closest = steps[steps.length - 1].dataset.step;
    }

    return closest;
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const closest = findClosestStep();
        if (closest) activateStep(closest);

        // Handle progressive chat bubbles for step 1
        if (currentStep === '1') {
          const step1 = document.querySelector('.scrolly__step[data-step="1"]');
          const rect = step1.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="1"] .chat-bubble');
          if (bubbles.length >= 3) {
            bubbles[1].classList.toggle('chat-bubble--hidden', progress < 0.33);
            bubbles[2].classList.toggle('chat-bubble--hidden', progress < 0.66);
          }
        }

        // Handle progressive chat bubbles for step 2
        if (currentStep === '2') {
          const step2 = document.querySelector('.scrolly__step[data-step="2"]');
          const rect = step2.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="2"] .chat-bubble');
          const thresholds = [0.2, 0.4, 0.6, 0.8];
          bubbles.forEach((bubble, index) => {
            if (index > 0 && index <= thresholds.length) {
              bubble.classList.toggle('chat-bubble--hidden', progress < thresholds[index - 1]);
            }
          });
        }

        // Handle progressive chat bubbles for step 3
        if (currentStep === '3') {
          const step3 = document.querySelector('.scrolly__step[data-step="3"]');
          const rect = step3.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="3"] .chat-bubble');
          if (bubbles.length >= 2) {
            bubbles[1].classList.toggle('chat-bubble--hidden', progress < 0.5);
          }
        }

        // Handle progressive chat bubbles for step 4
        if (currentStep === '4') {
          const step4 = document.querySelector('.scrolly__step[data-step="4"]');
          const rect = step4.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="4"] .chat-bubble');
          const numBubbles = bubbles.length;
          bubbles.forEach((bubble, index) => {
            if (index > 0) {
              const threshold = index / numBubbles;
              bubble.classList.toggle('chat-bubble--hidden', progress < threshold);
            }
          });
        }

        // Handle progressive chat bubbles for step 5
        if (currentStep === '5') {
          const step5 = document.querySelector('.scrolly__step[data-step="5"]');
          const rect = step5.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="5"] .chat-bubble');
          const numBubbles = bubbles.length;
          bubbles.forEach((bubble, index) => {
            if (index > 0) {
              const threshold = index / numBubbles;
              bubble.classList.toggle('chat-bubble--hidden', progress < threshold);
            }
          });
        }

        // Handle progressive chat bubbles for step 6
        if (currentStep === '6') {
          const step6 = document.querySelector('.scrolly__step[data-step="6"]');
          const rect = step6.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="6"] .chat-bubble');
          const numBubbles = bubbles.length;
          bubbles.forEach((bubble, index) => {
            if (index > 0) {
              const threshold = index / numBubbles;
              bubble.classList.toggle('chat-bubble--hidden', progress < threshold);
            }
          });
        }

        // Handle progressive chat bubbles for step 7
        if (currentStep === '7') {
          const step7 = document.querySelector('.scrolly__step[data-step="7"]');
          const rect = step7.getBoundingClientRect();
          const stepTop = window.scrollY + rect.top;
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const progress = Math.max(0, Math.min(1, (viewportCenter - stepTop) / rect.height));

          const bubbles = document.querySelectorAll('.scrolly__panel[data-panel="7"] .chat-bubble');
          const numBubbles = bubbles.length;
          bubbles.forEach((bubble, index) => {
            if (index > 0) {
              const threshold = index / numBubbles;
              bubble.classList.toggle('chat-bubble--hidden', progress < threshold);
            }
          });
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Activate first step on load
  activateStep('1');
});

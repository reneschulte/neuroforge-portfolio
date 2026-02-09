document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const form = document.querySelector('.contact-form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        const button = form.querySelector('button');
        button.disabled = true;
        button.textContent = 'Sending…';
        setTimeout(() => {
            button.textContent = 'Request received';
        }, 1200);
    });
});

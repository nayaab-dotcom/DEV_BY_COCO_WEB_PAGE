// Mobile nav toggle
const btn = document.getElementById('mobileMenuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu) {
btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});
}
// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
// Contact form (front-end only demo). Replace with your backend endpoint.
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
form.addEventListener('submit', async (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form).entries());
// Very basic validation
if (!data.name || !data.email || !data.message) {
statusEl.textContent = 'Please fill in all fields.';
return;
}
statusEl.textContent = 'Sending…';
try {
// TODO: POST to your serverless function or backend API
// await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
await new Promise((res) => setTimeout(res, 600));
statusEl.textContent = 'Thanks! Your message has been sent.';
form.reset();
} catch (err) {
statusEl.textContent = 'Something went wrong. Please try again.';
}
});
}
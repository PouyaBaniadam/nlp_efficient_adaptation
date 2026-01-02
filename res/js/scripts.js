const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const binary = '01';
const fontSize = 28;
const columns = canvas.width / fontSize;
const drops = [];
for(let x = 0; x < columns; x++) { drops[x] = Math.random() * canvas.height; }
const draw = () => {
    ctx.fillStyle = 'rgba(11, 11, 20, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffffff'; 
    ctx.font = fontSize + 'px "Share Tech Mono"';
    for(let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.985) { drops[i] = 0; }
        drops[i]++;
    }
};
setInterval(draw, 70);
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

const steps = document.querySelectorAll('.step');
document.getElementById('total-num').innerText = steps.length;
document.addEventListener('impress:stepenter', (e) => {
    const index = Array.from(steps).indexOf(e.target);
    const progress = ((index + 1) / steps.length) * 100;
    document.querySelector('.progress-fill').style.width = progress + '%';
    document.getElementById('current-num').innerText = index + 1;
});

impress().init();
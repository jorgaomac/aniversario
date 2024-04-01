//urso
// select elements
const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");

// init cursor position
let cursorPos = { x: 0, y: 0 };

// get window size
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};

function mousemove(e) {
  cursorPos = { x: e.clientX, y: e.clientY } 
  initFolow();
}

function touchmove(e) {
  cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY}
  initFolow();
}

const followCursor = (el, xRatio, yRatio) => {
  const elOffset = el.getBoundingClientRect();
  const centerX = elOffset.x + elOffset.width / 2;
  const centerY = elOffset.y + elOffset.height / 2;
  const distanceLeft = Math.round(((cursorPos.x - centerX) * 100) / window.innerWidth);
  const distanceTop = Math.round(((cursorPos.y - centerY) * 100) / window.innerHeight);  
  el.style.transform = `translate(${distanceLeft / xRatio}px, ${distanceTop / yRatio}px)`;
}

const initFolow = () => {
  if (ears) followCursor(ears, -2.8, -2.8)
  if (head) followCursor(head, 6, 6)
  if (eyes) followCursor(eyes, 1.8, 1.8)
  if (snout) followCursor(snout, 1.5, 1.7)
  if (nose) followCursor(nose, 1, 1)
}

window.addEventListener('resize', setWindowSize);
window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);

const dataAlvo = new Date('2024-04-28 00:00:00');

// Função para atualizar o temporizador
function atualizarTemporizador() {
  const dataAtual = new Date();
  const diferenca = dataAlvo - dataAtual;

  if (diferenca <= 0) {
    clearInterval(temporizador);
    document.getElementById('temporizador').textContent = 'Temporizador concluído!';
    return;
  }

  const segundos = Math.floor(diferenca / 1000) % 60;
  const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
  const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  document.getElementById('temporizador').textContent = `Dias: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`;
}

// Inicie o temporizador imediatamente e atualize a cada segundo
atualizarTemporizador(); // Atualiza o temporizador imediatamente.
const temporizador = setInterval(atualizarTemporizador, 1000);

// Função para adicionar emojis aleatórios
function adicionarEmojisAleatorios() {
    const emojis = ["🌸", "💐", "🌼", "🌻", "🍯", "❤️"]; 
    const container = document.getElementById("container");

    // Adiciona emojis aleatórios ao conteúdo
    for (let i = 0; i < 25; i++) { // Adiciona 20 emojis
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const span = document.createElement("span");
        span.textContent = emoji;
        span.style.position = "absolute";
        span.style.left = Math.random() * 100 + "%"; // Posição horizontal aleatória
        span.style.top = Math.random() * 100 + "%"; // Posição vertical aleatória
        container.appendChild(span);
    }
}

// Chama a função para adicionar emojis aleatórios quando a página carregar
window.addEventListener("load", adicionarEmojisAleatorios);
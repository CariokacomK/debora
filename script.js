
const poema = `Todas as cartas de amor são ridículas.
Não seriam cartas de amor se não fossem ridículas.

Também escrevi em meu tempo cartas de amor, como as outras,
Ridículas.

As cartas de amor, se há amor,
Têm de ser ridículas.

Mas, afinal,
Só as criaturas que nunca escreveram cartas de amor
É que são ridículas.

Quem me dera o tempo em que escrevia
Sem dar por isso
Cartas de amor ridículas.

Afinal, só as criaturas ridículas
É que têm tempo de escrever
Cartas de amor
Ridículas.

Fernando Pessoa (Álvaro de Campos)`;

let currentIndex = 0;
const poemaEl = document.getElementById("poema");
const perguntasEl = document.getElementById("perguntas");
const perguntas = document.querySelectorAll(".pergunta");
let naoClicks = 0;

function typePoema() {
  if (currentIndex < poema.length) {
    poemaEl.textContent += poema.charAt(currentIndex);
    currentIndex++;
    setTimeout(typePoema, 50);
  } else {
    setTimeout(() => {
      poemaEl.classList.add("hidden");
      perguntasEl.classList.remove("hidden");
      perguntas[0].classList.remove("hidden");
    }, 5000);
  }
}

const respostasCorretas = ['6', '3', 'verde', 'basquete']; 

function responder(perguntaIndex, resposta, el) {
  if (resposta !== respostasCorretas[perguntaIndex - 1]) {
    const popup = document.getElementById('popup-erro');
    popup.classList.remove('hidden');

    el.classList.add('hidden');

    setTimeout(() => {
      popup.classList.add('hidden');
    }, 2000);

    return;
  }

  perguntas[perguntaIndex - 1].classList.add("hidden");
  if (perguntaIndex < perguntas.length) {
    perguntas[perguntaIndex].classList.remove("hidden");
  }
}

function mostrarAmor() {
  document.getElementById("perguntas").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  const container = document.getElementById("coracoes");

  for (let i = 0; i < 30; i++) {
    const cora = document.createElement("div");
    cora.className = "cora";
    cora.innerHTML = "&#10084;"; 

    const left = Math.floor(Math.random() * 100);
    cora.style.left = `${left}vw`;

    cora.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

    const duration = (3.5 + Math.random()).toFixed(1);
    cora.style.animation = `subir ${duration}s ease-out forwards`;

    container.appendChild(cora);
    setTimeout(() => cora.remove(), duration * 1000);
  }
}

function fugir() {
  const naoBtn = document.getElementById("naoBtn");
  naoClicks++;
  if (naoClicks > 5) {
    naoBtn.remove();
    alert("Para de querer me magoar 😭");
    return;
  }
  naoBtn.style.position = "absolute";
  naoBtn.style.top = Math.random() * 80 + "%";
  naoBtn.style.left = Math.random() * 80 + "%";
}

window.onload = typePoema;

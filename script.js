document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault(); // не перезавантажує сторінку

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const steamNick = document.getElementById("steamNick").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cvc = document.getElementById("cvc").value.trim();
  const expiry = document.getElementById("expiry").value.trim();

  // Перевірка чи все заповнено
  if (!name || !email || !steamNick || !cardNumber || !cvc || !expiry) {
    document.getElementById("message").textContent = "Please fill in all required fields!";
    document.getElementById("message").style.color = "#ff4444";
    return;
  }

  // Ховаємо форму
  const form = document.getElementById("registerForm");
  form.style.display = "none";

  // Створюємо екран успіху
  const successDiv = document.createElement("div");
  successDiv.classList.add("success-screen");
  successDiv.innerHTML = `
    <h2>Registration Complete!</h2>
    <p>Welcome, Commander <strong>${steamNick}</strong>!</p>
    <p class="thanks">Your T54E1 is ready. Click below to claim your tank!</p>
    <button id="claimBtn" class="claim-btn">Claim Your Tank</button>
  `;

  form.parentElement.appendChild(successDiv);

  // Коли натискає на "Claim Your Tank"
  const claimBtn = successDiv.querySelector("#claimBtn");
  claimBtn.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("tank-overlay");
    overlay.innerHTML = `
      <img src="./img/861gk9gqka0c1.png" alt="Your Tank" class="fullscreen-tank" />
      <button class="close-btn">✖</button>
    `;

    document.body.appendChild(overlay);

    // Закрити кнопку
    overlay.querySelector(".close-btn").addEventListener("click", () => {
      overlay.remove();
    });
  });
});

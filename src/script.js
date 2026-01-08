function startChat() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("chat").classList.add("active");
}

async function sendMessage() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");
  const text = input.value.trim();

  if (!text) return;

  messages.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";

  try {
    const res = await fetch("http://127.0.0.1:8000/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        phone: "web"
      })
    });

    const data = await res.json();
    messages.innerHTML += `<div class="msg bot">${data.reply}</div>`;
    messages.scrollTop = messages.scrollHeight;

  } catch {
    messages.innerHTML += `<div class="msg bot">Server error ❌</div>`;
  }
}
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

const API_URL = "https://haibotchat1.onrender.com/chat";

async function sendMessage(message) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    showTyping(true);

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    addBotMessage(data.reply);

  } catch (err) {
    addBotMessage(
      "⚠️ Le serveur est occupé. Merci de réessayer dans quelques secondes."
    );
  } finally {
    showTyping(false);
  }
}

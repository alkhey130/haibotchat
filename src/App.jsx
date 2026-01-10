import { useState, useEffect, useRef } from "react";
import "./App.css";

/* ===== Avatar SVG inline (AUCUN import image) ===== */
const BotAvatar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#12f8c6ff" />
    <rect x="6" y="8" width="12" height="8" rx="4" fill="white" />
    <circle cx="10" cy="12" r="1.5" fill="#5b2cff" />
    <circle cx="14" cy="12" r="1.5" fill="#5b2cff" />
  </svg>
);

const UserAvatar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" fill="#969393ff" />
    <path d="M4 22c1.5-4 14.5-4 16 0" fill="#999" />
  </svg>
);

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  useEffect(() => {
  endRef.current?.scrollIntoView({ block: "end" });
}, [messages.length]);
const [showScrollBtn, setShowScrollBtn] = useState(false);


  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setInput("");

    setMessages((m) => [...m, { role: "user", content: text }]);

    try {
      const res = await fetch("https://haibotchat1.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "❌ Erreur serveur" },
      ]);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-card">

        {/* ===== Header ===== */}
        <div className="chat-header">
          <BotAvatar />
          <span>Chatbot</span>
        </div>

        {/* ===== Messages ===== */}
        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg-row ${msg.role}`}>
              {msg.role === "assistant" && <BotAvatar />}
              <div className={`msg-bubble ${msg.role}`}>
                {msg.content}
              </div>
              {msg.role === "user" && <UserAvatar />}
            </div>
          ))}
          <div ref={endRef} />
        </div>
        

        {/* ===== Input ===== */}
        <div className="chat-footer">
          <input
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          />
          <button onClick={() => sendMessage(input)}>➤</button>
        </div>

      </div>
    </div>
  );
}

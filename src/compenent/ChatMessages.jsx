export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((m, i) => (
        <div key={i} className={`bubble ${m.sender}`}>
          {m.text}
        </div>
      ))}
    </div>
  );
}

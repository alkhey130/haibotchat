export default function ChatInput({ value, onChange, onSend }) {
  return (
    <div className="chat-input">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Message..."
      />
      <button onClick={onSend}>Envoi</button>
    </div>
  );
}

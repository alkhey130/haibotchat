export default function ChatContainer({ children }) {
  return (
    <div className="chat-wrapper">
      <div className="chat-card">
        {children}
      </div>
    </div>
  );
}

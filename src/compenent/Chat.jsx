export default function Chat() {
  return (
    <div className="w-[360px] h-[720px] bg-white rounded-2xl flex flex-col shadow-2xl">

      <header className="p-4 font-bold border-b">
        Business Chatbot
      </header>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        <div className="bg-gray-200 px-4 py-2 rounded-xl w-fit">
          Salam 👋
        </div>

        <div className="bg-blue-500 text-white px-4 py-2 rounded-xl w-fit ml-auto">
          Comment puis-je vous aider ?
        </div>
      </div>

      <div className="p-4 flex gap-2 border-t">
        <input
          className="flex-1 border rounded-xl px-4 py-2 outline-none"
          placeholder="Écris un message..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-xl">
          Envoyer
        </button>
      </div>

    </div>
  )
}

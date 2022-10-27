import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message",
        {
          text: message,
          name: localStorage.getItem("userName"),
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id
        }
      )
    }
    setMessage("");
  }
  return (
    <div className='flex items-center'>
      <form className='flex items-center gap-4 mt-4' onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder='Write message'
          className="form-control flex-1"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="bg-[#607eaa] rounded-[.5rem] text-[#f9f5eb] px-8 py-2">SEND</button>
      </form>
    </div>
  )
}

export default ChatFooter
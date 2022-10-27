import React from 'react';
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <header className="flex justify-end mb-4">
        <button className="bg-[#607eaa] rounded-[.5rem] text-[#f9f5eb] px-8 py-2 mt-4" onClick={handleLeaveChat}>LEAVE CHAT</button>
      </header>

      <div className="w-full h-[60vh] border rounded-[.5rem] p-8 overflow-y-auto">
        {messages.map(message => (
          message.name === localStorage.getItem("userName") ? (
            <div className="flex items-center gap-4" key={message.id}>
              <p className="w-[8rem] text-gray-500">You</p>
              <div className="">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4" key={message.id}>
              <p className="w-[8rem] text-gray-500">{message.name}</p>
              <div className="">
                <p>{message.text}</p>
              </div>
            </div>
          )
        ))}

        <div ref={lastMessageRef} />
      </div>
    </>
  );
}

export default ChatBody;

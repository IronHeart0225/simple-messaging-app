import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on("newUserResponse", data => setUsers(data))
  }, [socket, users])

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-[1.5rem] text-center">Messaging App</h2>
      <div>
        <h4 className="font-medium text-[1rem] mt-4">{users.length} users in the room:</h4>
        <div className="mt-2">
          {users.map(user => <p key={user.socketID}>{user.userName}</p>)}
        </div>
      </div>
    </div>
  )
}

export default ChatBar;

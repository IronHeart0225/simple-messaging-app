import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  }

  return (
    <form className="w-full h-[100vh] flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      <h1 className="font-semibold text-[2rem] mb-[2.5rem]">Sign in to Messaging App</h1>
      <label htmlFor="username">Username</label>
      <input type="text"
        minLength={6}
        name="username"
        id='username'
        className='form-control text-[1rem] rounded-[.5rem] max-w-[30rem] mt-4'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <button className="bg-[#607eaa] rounded-[.5rem] text-[#f9f5eb] px-8 py-2 mt-4">SIGN IN</button>
    </form>
  )
}

export default Home;

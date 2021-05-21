import { useState } from "react";

const EventsWithHooks = () => {
  const [username, setUserName] = useState(""); //duplicate smth alt shift down arrow
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div>
      <input
        type="text"
        placeholder="enter your username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      {/* if the show password true then we display show else we display not show */}
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h2>{username}</h2>
      <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
      <button
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        Show/hide password
      </button>
    </div>
  );
};


export default EventsWithHooks;
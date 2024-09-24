import React, { useState } from "react";

function Login() {
  const [userName, setuserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleSubmit() {}
  return (
    <>
      <p> login form</p>

      <input
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>login</button>
    </>
  );
}

export default Login;

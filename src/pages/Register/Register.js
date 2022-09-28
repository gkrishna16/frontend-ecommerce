import React, { useState } from "react";
import { publicRequest } from "../../requestMethods";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(username, password, email);
      publicRequest.post(`/auth/register`, { username, password, email });
     
    } catch (error) {
      console.log(error);
      alert(`Error`);
    }
  }

  return (
    <div>
      <div className="">Register</div>
      <form>
        <div className="">
          <label htmlFor="">Username : </label>
          <input
            type="username"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="">Email : </label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Register;

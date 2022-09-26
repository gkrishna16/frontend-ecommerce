import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, seEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    
  }

  return (
    <div>
      <div className="">Register</div>
      <form>
        <div className="">
          <label htmlFor="">Username : </label>
          <input type="username" placeholder="username" />
        </div>
        <div className="">
          <label htmlFor="">Email : </label>
          <input type="email" placeholder="email" />
        </div>
        <div className="">
          <label htmlFor="">Password : </label>
          <input type="password" placeholder="password" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Register;

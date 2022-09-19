import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-box">
        <div>
          <h1>LOGIN</h1>
          <div className="form-container">
            {" "}
            <div>
              <input placeholder="username" />
              <input placeholder="password" />
              {/* <input placeholder="username" /> */}
            </div>
            {/* <div>
              <input placeholder="email" />
              <input placeholder="password" />
              <input placeholder="confirm password" />
            </div> */}
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

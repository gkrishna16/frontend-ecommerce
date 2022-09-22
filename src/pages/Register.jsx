import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="form-box">
          <div>
            <h1>CREATE AN ACCOUNT</h1>
            <div>
              <div className="input-box-flex">
                <input placeholder="name" />
                <input placeholder="lastname" />
                <input placeholder="username" />
              </div>
              <div className="input-box-flex">
                <input placeholder="email" />
                <input placeholder="password" />
                <input placeholder="confirm password" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

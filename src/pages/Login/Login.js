import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { login } from "../../Redux/apiCalls";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, error } = useSelector((state) => state.user);

  function handleSubmit(e) {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  }

  console.log(username, password);
  return (
    <div>
      <Navbar />
      <div className=""></div>
      <div className="">
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className={isFetching ? "butdis" : "but"}
          onClick={handleSubmit}
          disabled={isFetching}
        >
          Submit
        </button>

        {error && <div className="error-msg">Something went wrong.</div>}
      </div>
    </div>
  );
};

export default Login;

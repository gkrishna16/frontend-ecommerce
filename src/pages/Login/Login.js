import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { login } from "../../Redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleCliclk = (e) => {
    e.prevent.default();
    login(dispatch, { username, password });
  };

  function handleSubmit(e) {}

  console.log(username, password);
  return (
    <div>
      <Navbar />
      <div className=""></div>
      <div className="">
        <input onChange={(e) => setUsername(e.target.value)} />
        <input onChange={(e) => setPassword(e.target.value)} />
        <button>Submit </button>
      </div>
    </div>
  );
};

export default Login;

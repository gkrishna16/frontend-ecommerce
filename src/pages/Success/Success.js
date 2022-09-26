import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Success.css";

const Success = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Navbar />
      <div className="">Your payment was successful.</div>
    </div>
  );
};

export default Success;

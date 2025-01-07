import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export const About = () => {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <h1>About</h1>
        <p>{state}</p>
      </div>
    </div>
  );
};

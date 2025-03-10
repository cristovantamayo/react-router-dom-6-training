import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time === 0) {
      navigate("/about", {
        state: `This is the state from Redirect component: ${Math.random()}`,
      });
    }
  }, [time, navigate]);

  return (
    <div>
      <div>
        <h1>Get out of here in: {time}</h1>
      </div>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home/index.tsx";
import "./styles/global-style.css";
import { Menu } from "./components/Menu/index.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/index.tsx";
import { Posts } from "./components/Posts/index.tsx";
import { Post } from "./components/Post/index.tsx";
import { Redirect } from "./components/Redirect/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

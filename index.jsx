import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Watches from "./pages/Watches";

import "./server"


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#LowFactory</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/watches">Watches</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/watches" element={<Watches />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
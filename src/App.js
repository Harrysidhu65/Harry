
import Home from "./components/home";

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from "./components/layout";
import About from "./components/about";
import Service from "./components/service";
import Contact from "./components/contact";
function App() {
  
  return (
    <main>
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact/>} />
           </Route>
      </Routes>
    </BrowserRouter>
      </main>
  );
}

export default App;

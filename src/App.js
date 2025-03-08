
import Home from "./components/home";

import {Route, Routes, HashRouter } from 'react-router-dom';
import React from 'react';
import Layout from "./components/layout";
import About from "./components/about";
import Service from "./components/service";
import Contact from "./components/contact";

function App() {
  
  return (
    <main>
       <HashRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact/>} />
           </Route>
      </Routes>
    </HashRouter>
      </main>
  );
}

export default App;

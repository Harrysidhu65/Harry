
import Home from "./components/home";

import {Route, Routes, HashRouter } from 'react-router-dom';
import React from 'react';
import Layout from "./components/layout";

function App() {
  
  return (
    <main>
       <HashRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
           </Route>
      </Routes>
    </HashRouter>
      </main>
  );
}

export default App;

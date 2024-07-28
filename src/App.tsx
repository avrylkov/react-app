import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./demo/app/Login"
import Registry from "./demo/app/Registry"
import AddRegisryEntry from "./demo/app/AddRegisryEntry"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/registry/add" element={<AddRegisryEntry />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
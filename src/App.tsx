import React from 'react';
import './App.css';
import Route from "./routes";
import {
  BrowserRouter ,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter >
      <Route/>
    </BrowserRouter>
  );
}

export default App;

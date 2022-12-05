import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Page">
      <h1 className="title">Skolų valdymo sistema</h1>
      <div className="AuthForm">
       {
         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    </div>
  );
}

export default App;
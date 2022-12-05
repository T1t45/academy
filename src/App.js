import React, { useState } from "react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Main from './pages/Main/Main.jsx';
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
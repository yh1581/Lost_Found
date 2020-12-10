import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/common/index';
import { Login, Logout, Register } from "./components/login/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
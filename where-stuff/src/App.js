import React from 'react';
import './App.css';
import axios from 'axios';

import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/common/index';
import { Login, Register } from "./components/login/index";

function login(e){
  e.preventDefault();
  let request = {
      username: document.getElementsByName('username').value,
      password: document.getElementByName('password').value,
  }
  axios.post('http://localhost:3001/login',request)
  .then(resp=>{
      alert(resp.data.message);
  })
  .catch(err=>{
      console.log(err);
  })
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: null
//     };
//   }
//   componentDidMount() {
//     fetch('http://localhost:3001/api')
//       .then(res => res.json())
//       .then(data => this.setState({ username: data.username }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Route exact path="/" component={Header} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//         </BrowserRouter>
//       </div>
//     );
//     ;
//   }
// }

export default App;
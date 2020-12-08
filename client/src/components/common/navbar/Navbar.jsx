import React from 'react';

import './Navbar.css';
import axios from 'axios';

async function is_logined() {
  await axios.get('http://localhost:3001/main')
    .then((response) => {
      console.log(response.data);
      if (response.data == 1) {
        return 1;
      }
    })
    .catch((error) => {
      console.log(error);
    })
  return 0;
}

const Navbar = () => {
  console.log(is_logined());
  if (is_logined()) {
    return (
      <section className="navbar">
        <a href="/lost" className="navbar-item">내 분실물</a>
        <a href="/mypage" className="navbar-item">마이페이지</a>
        <a href="/logout" className="navbar-item">로그아웃</a>
      </section>
    )
  }
  else {
    return (
      <section className="navbar">
        <a href="/lost" className="navbar-item">내 분실물</a>
        <a href="/mypage" className="navbar-item">마이페이지</a>
        <a href="/login" className="navbar-item">로그인</a>
        <a href="/register" className="navbar-item">회원가입</a>
      </section>
    )
  }
}

export default Navbar; 
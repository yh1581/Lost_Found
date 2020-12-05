import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <section className="navbar">
      <a href="/lost" className="navbar-item">내 분실물</a>
      <a href="/mypage" className="navbar-item">마이페이지</a>
      <a href="/login" className="navbar-item">로그인</a>
      <a href="/register" className="navbar-item">회원가입</a>
  </section>
  )
}

export default Navbar; 
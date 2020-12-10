import React from 'react';
import LoginImg from "./login.png";

class Register extends React.Component{
    

    render(){
        return (
            <div className="base-container">
                    <div className="header">회원가입</div>
                    <div className="content">
                        <div className="image">
                            <img src={LoginImg} alt="" />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">사용자 이름</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">이메일</label>
                                <input type="email " name="email" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="student_id">학번</label>
                                <input type="text" name="student_id" placeholder="student_id" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">비밀번호</label>
                                <input type="password" name="password" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re_password">비밀번호 재확인</label>
                                <input type="password" name="re_password" placeholder="re_password" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn">
                            회원가입
                        </button>
                    </div>
                </div>
        );
    }
}

export default Register;
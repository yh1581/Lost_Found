import React from 'react';
import axios from 'axios';
import LoginImg from "./login.png";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", student_id: "", password: "" };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', this.state)
            .then((response) => {
                if (response.data == 1) {
                    window.location = '/';
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { username, email, student_id, password } = this.state;
        return (
            <div className="base-container">
                <div className="header">회원가입</div>
                <form onSubmit={this.submitHandler}>
                    <div className="content">
                        <div className="image">
                            <img src={LoginImg} alt="" />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">사용자 이름</label>
                                <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">이메일</label>
                                <input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="student_id">학번</label>
                                <input type="text" name="student_id" placeholder="student_id" value={student_id} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">비밀번호</label>
                                <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re_password">비밀번호 재확인</label>
                                <input type="password" name="re_password" placeholder="re_password" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">
                            회원가입
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
import React from 'react';
import LoginImg from './login.png';
import axios from 'axios';
import Cookies from 'js-cookie';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
    }

    changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',this.state)
        .then((response)=>{
            if(response.data == 1){
                Cookies.set('user', 1, { expires: 1 });
                window.location='/';
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="base-container">
                <div className="header">Login</div>
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
                                <label htmlFor="password">비밀번호</label>
                                <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="submit" className="btn">로그인</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
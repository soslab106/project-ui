import React, { Component } from 'react';
import axios from "axios";

class SignUp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            api: 'http://140.119.19.99:8000/users/',
            username: '',
            password: '',
            email: '',
            loading: false,
        }
    }
    

    handleFieldChange = (e, field) => {
        this.setState({ [field]: e.target.value }, console.log('changed'));
    };

    componentDidMount = () => {
        console.log('componentDidMount')
    }

    signup = (e) => {
        e.preventDefault();
        let { api, username, password, email, repassword } = this.state;
        if(password.length<8){
            alert("密碼長度過短！")
        }else if (username && password && email && repassword == password) {
            this.setState({ loading: true });

            console.log('loading')
            let formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            formData.append("email", email);

            axios
                .post(api, formData, {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    let { data } = res;
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    this.setState({
                        logged_in: true,
                        username: data.username
                    });
                    alert('註冊成功!')
                    window.location.href = '/'
                })
                .catch((error) => {
                    alert(Object.values(error.response.data).join(' ').split(',').join(' '))
                });
           
        } else if (!username | !password | !email) {
            alert("請填寫完整欄位！");
        } else if (repassword != password) {
            alert('密碼不一致！')
        }
    };

    render() {

        return (
            <div className="container d-flex flex-column align-items-center expand-full">
                <h1 className="mb-5 title">註冊</h1>
                <form className="d-flex flex-column align-items-center">
                    <div className="form-group">
                        <label for="name">使用者名稱</label>
                        <input type="text" id="name" className="form-control" onChange={e=>this.handleFieldChange(e, 'username')}></input>
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" className="form-control" onChange={e=>this.handleFieldChange(e, 'email')}></input>
                    </div>

                    <div className="form-group">
                        <label for="password">密碼（至少八個字元）</label>
                        <input type="password" id="password" className="form-control" onChange={e=>this.handleFieldChange(e, 'password')}></input>
                    </div>
                    <div className="form-group">
                        <label for="repassword">確認密碼</label>
                        <input type="password" id="repassword" className="form-control" onChange={e=>this.handleFieldChange(e, 'repassword')}></input>
                    </div>

                    {/* <div className="form-group form-check">
                        <input type="checkbox" id="remember" className="form-check-input"></input>
                        <label for="remember" className="form-check-label">記住我 </label>
                    </div> */}
                    <div className="mt-4">
                        <button className="btn btn-main" type="submit" onClick={e=>this.signup(e)}>註冊</button>
                    </div>
                    <small id="emailHelp" className="form-text text-muted my-3">已有帳號了嗎？請<a href="/login">登入</a></small>

                </form>
            </div>
        );
    }
}

export default SignUp;
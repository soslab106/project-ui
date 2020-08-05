import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        api: 'http://127.0.0.1:8000/api-token-auth/',
        username: '',
        password: '',
        logged_in: localStorage.getItem('token') ? true : false,
    }
  }
  handleFieldChange = (e, field) => {
    this.setState({ [field]: e.target.value }, console.log('changed'));
  };

  login = (e) => {
    e.preventDefault();
    let { api, username, password } = this.state;
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    axios
        .post(api, formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        })
        .then((res) => {
            let { data } = res;
            console.log(data)
            localStorage.setItem('token', data.token);
            this.setState({
              logged_in: true,
              username: data.user.username
            });
            alert('登入成功!')
            window.location.href = '/'
        })
        .catch((error) => {
            console.error(error);
            alert("登入失敗，請檢查填寫欄位！");
        });
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center expand-full">
        <h1 className="mb-5 title">登入</h1>
        <form className="d-flex flex-column align-items-center">
          <div className="form-group">
            <label for="name">使用者名稱: </label>
            <input type="text" id="name" className="form-control" onChange={e=>this.handleFieldChange(e, 'username')}></input>
          </div>

          <div className="form-group">
            <label for="password">密碼:</label>
            <input type="password" id="password" className="form-control" onChange={e=>this.handleFieldChange(e, 'password')}></input>
          </div>

          {/*<div className="form-group form-check">
            <input
              type="checkbox"
              id="remember"
              className="form-check-input"
            ></input>
            <label for="remember" className="form-check-label">
              記住我
            </label>
    </div>*/}

          <small className="form-group">
            <a href="/">忘記密碼</a>
          </small>

          <button className="btn btn-main" type="button" onClick={e=>this.login(e)}>
            登入
          </button>
        </form>
        <div className="my-3">
          <small id="emailHelp" className="form-text text-muted">尚未創建帳號嗎？請<a href="/signup">註冊</a></small>

        </div>
      </div>
    );
  }
}


export default Login;

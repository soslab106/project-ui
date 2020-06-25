import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import ReactDOM from 'react-dom';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center expand-full">
        <h1 className="mb-5 title">登入</h1>
        <form className="d-flex flex-column align-items-center">
          <div className="form-group">
            <label for="name">使用者名稱: </label>
            <input type="text" id="name" className="form-control"></input>
          </div>

          <div className="form-group">
            <label for="password">密碼:</label>
            <input type="text" id="password" className="form-control"></input>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              id="remember"
              className="form-check-input"
            ></input>
            <label for="remember" className="form-check-label">
              記住我{" "}
            </label>
          </div>

          <div className="form-group">
            <a href="/">忘記密碼?</a>
          </div>

          <button className="btn btn-main" type="button">
            Submit
          </button>
        </form>
        <div className="my-4">
          {/* <button className="btn btn-main">Google 登入</button> */}
          <GoogleLogin
            clientId="840585485839-tmkn6oo6t5bimjtjqjtm1eg4tb8vgo6u.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className="my-1">
          <a href="/signup">
            <button className="btn btn-main">註冊</button>
          </a>
        </div>
      </div>
    );
  }
}


export default Login;

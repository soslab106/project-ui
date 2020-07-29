import axios from "axios";
import React, { Component } from "react";

class SignupNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "http://140.119.19.99:8000/users/",
      username: "",
      password: "",
      email: "",
      loading: false,
    };
  }

  handleFieldChange = (e, field) => {
    this.setState({ [field]: e.target.value }, console.log("changed"));
  };

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  signup = (e) => {
    e.preventDefault();
    let { api, username, password, email, repassword } = this.state;
    if (password.length < 8) {
      alert("密碼長度過短！");
    } else if (username && password && email && repassword == password) {
      this.setState({ loading: true });

      console.log("loading");
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
          localStorage.setItem("token", data.token);
          this.setState({
            logged_in: true,
            username: data.username,
          });
          alert("註冊成功!");
          window.location.href = "/";
        })
        .catch((error) => {
          alert(
            Object.values(error.response.data).join(" ").split(",").join(" ")
          );
        });
    } else if (!username | !password | !email) {
      alert("請填寫完整欄位！");
    } else if (repassword != password) {
      alert("密碼不一致！");
    }
  };

  render() {
    return (
      <div className="container expand-full d-flex  justify-content-center align-items-center">
        <div className="account-entry rounded bg-light-block d-flex flex-column align-items-center justify-content-center p-5">
          <h1 className="text-center title"> 建立專屬於您的HowAILab帳戶 </h1>
          <h5 className='text-center my-4' style={{color:"lightblue"}}> 可以用來記錄OOXX~~ </h5>
          <div className="form-group mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="使用者名稱"
              onChange={(e) => this.handleFieldChange(e, "username")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="電子郵件"
              onChange={(e) => this.handleFieldChange(e, "email")}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="密碼"
              onChange={(e) => this.handleFieldChange(e, "password")}
            />
            <little className="text-sm-left" style={{ color: "red" }}>
              需包含英文字母和數字
            </little>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="密碼確認"
              onChange={(e) => this.handleFieldChange(e, "repassword")}
            />
          </div>
          <div className="form-group mt-4">
            <button
              className="form-control btn btn-personal"
              type="submit"
              onClick={(e) => this.signup(e)}
            >
              註冊
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupNew;

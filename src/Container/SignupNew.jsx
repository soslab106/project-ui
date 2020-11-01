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
      <div className="expand-full d-flex  justify-content-center align-items-center">
        <div className="container account-entry rounded bg-light-block d-flex flex-column align-items-center justify-content-center p-5">
          <h1 className="text-center main-title"> 註冊 </h1>
          <div className="form-group mt-4">
            <div className="content-color mb-2">帳號名稱</div>
            <input
              className="form-control"
              type="text"
              placeholder="帳號名稱"
              onChange={(e) => this.handleFieldChange(e, "username")}
            />
          </div>
          <div className="form-group">
            <div className="content-color mb-2">電子郵件</div>

            <input
              className="form-control"
              type="email"
              placeholder="電子郵件"
              onChange={(e) => this.handleFieldChange(e, "email")}
            />
          </div>
          <div className="form-group">
            <div className="content-color mb-2">
              密碼
              <span
                className="ml-1"
                style={{ color: "#FF4E00", fontSize: "12px" }}
              >
                需包含英文字母和數字
              </span>
            </div>
            <input
              className="form-control"
              type="password"
              placeholder="密碼"
              onChange={(e) => this.handleFieldChange(e, "password")}
            />
          </div>
          <div className="form-group">
            <div className="content-color mb-2">密碼確認</div>
            <input
              className="form-control"
              type="password"
              placeholder="密碼確認"
              onChange={(e) => this.handleFieldChange(e, "repassword")}
            />
          </div>
          {/* <div className="form-group">
            <input type="radio" name="private-policy" />
            <label className='ml-2 content-color' for="private-policy">
              我已閱讀並同意
              <a
                href="#"
                style={{ color: "#29b4be", textDecoration: "underline" }}
              >
                隱私條款
              </a>
            </label>
          </div> */}
          <div className="form-group mt-3">
            <button
              className="form-control btn btn-main"
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

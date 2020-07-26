import React, { Component } from 'react';
import axios from "axios";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: 'http://140.119.19.99:8000/api-token-auth/',
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
            
            <div className='container expand-full d-flex  justify-content-center align-items-center'>
            <div className='bg-secondary d-flex flex-column align-items-center justify-content-center p-5'>
                <h1 className='text-center'>登入您的HowAILab帳戶</h1>
                <h2 className='text-center'>可以用來記錄OOXX~~</h2>
                <div className='form-group mt-3'>
                 <input className='form-control' type='text' onChange={e=>this.handleFieldChange(e, 'username')} placeholder='使用者名稱' />
            
                </div>
                <div className='form-group' ><input className='form-control' type='password' placeholder='密碼' onChange={e=>this.handleFieldChange(e, 'password')}/>
                </div>
                <a href='/'> <little className='text-sm-left m-2' style={{color:"blue"}}>忘記密碼</little></a>
                <div className='form-group m-2'><button className='form-control' type='submit' onClick={e=>this.login(e)}>登入</button></div>
                <little className='text-sm-left m-0' >還沒註冊嗎? <a href='/SignupNew'> <little className='text-sm-left' style={{color:"blue"}}>註冊</little></a></little>
            </div>
        </div>
      
        );
    }
}

export default SignIn;
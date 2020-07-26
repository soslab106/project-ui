import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            
            <div className='container expand-full d-flex  justify-content-center align-items-center'>
            <div className='bg-secondary d-flex flex-column align-items-center justify-content-center p-5'>
                <h1 className='text-center'>登入您的HowAILab帳戶</h1>
                <h2 className='text-center'>可以用來記錄OOXX~~</h2>
                <div className='form-group mt-3'>
                 <input className='form-control' type='text' placeholder='使用者名稱' />
            
                </div>
                <div className='form-group' ><input className='form-control' type='text'placeholder='密碼' />
                </div>
                <a href='/'> <little className='text-sm-left m-2' style={{color:"blue"}}>忘記密碼</little></a>
                <div className='form-group m-2'><button className='form-control' type='submit'>登入</button></div>
                <little className='text-sm-left m-0' >還沒註冊嗎? <a href='/practice'> <little className='text-sm-left' style={{color:"blue"}}>註冊</little></a></little>
            </div>
        </div>
      
        );
    }
}

export default SignIn;
import React, { Component } from 'react';

class Practice extends Component {
    render() {
        return (
            <div className='container expand-full d-flex  justify-content-center align-items-center'>
                <div className='bg-secondary d-flex flex-column align-items-center justify-content-center p-5'>
                    <h1 className='text-center'>建立專屬於您的HowAILab帳戶</h1>
                    <h2 className='text-center'>可以用來記錄OOXX~~</h2>
                    <div className='form-group mt-3'>
                     <input className='form-control' type='text' placeholder='使用者名稱' />
                
                    </div>
                    
                    <div className='form-group'><input className='form-control' type='text'placeholder='電子郵件' /></div>
                    
                    <div className='form-group' ><input className='form-control' type='text'placeholder='密碼' />
                        <little className='text-sm-left' style={{color:"red"}}>需包含英文字母和數字</little>
                    </div>
                    
                    
                    <div className='form-group'><input className='form-control' type='text'placeholder='密碼確認' /></div>
                    
                    <div className='form-group mt-4'><button className='form-control' type='submit'>註冊</button></div>
                </div>
            </div>
        );
    }
}

export default Practice;
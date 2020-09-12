import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className='d-flex row border justify-content-center'>
                <div className='d-flex flex-column align-items-center border'>
                    <div>
                        <img src='/images/face.png' />
                    </div>
                    <p>王曉明 <br />
                        帳號:soslab<br />
                        上次登入時間 2020/2/2
                    </p>
                </div>

                
                <div className='border d-flex flex-column justify-content-center'>
                    <div className='d-flex flex-row justify-content-between'>
                        <p>
                            電子郵件:HowAILab@gmail.com.tw
                    </p>
                        <a href="/Menu">
                            <button className="btn btn-lg btn-main">修改email</button>
                        </a>
                    </div>
                    <div><hr color='black' className='' /></div>

                    <div className='d-flex flex-row justify-content-between'>
                        <p>
                            密碼:*********
                    </p>
                        <a href="/Menu">
                            <button className="btn btn-lg btn-main ">更改密碼</button>
                        </a>
                    </div>
                    <div><hr color='black' className='' /></div>
                    <div className='d-flex flex-row justify-content-between'>
                        <p>
                            使用過的模型
                    </p>
                        <a href="/Menu">
                            <button className="btn btn-lg btn-main ">顯示列表</button>
                        </a>
                    </div>
                    <div><hr color='black' className='' /></div>
                    <div className='d-flex flex-row justify-content-between'>
                        <p>
                            客製化模型記錄
                    </p>
                        <a href="/Menu">
                            <button className="btn btn-lg btn-main ">顯示列表</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
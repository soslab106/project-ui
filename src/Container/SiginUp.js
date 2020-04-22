import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

class SiginUp extends Component {
    render() {
        return (
            <div className="container d-flex flex-column align-items-center">
                <h1 className="mb-5 title">註冊</h1>
                <form className="d-flex flex-column align-items-center">
                    <div className="form-group">
                        <label for="name">使用者名稱: </label>
                        <input type="text" id="name" className="form-control"></input>
                        <small id="emailHelp" className="form-text text-muted">已有帳號了嗎？請<a href="/">登入</a></small>
                    </div>
                    <div className="form-group">
                        <label for="email">E-mail (可不填)：</label>
                        <input type="email" id="email" className="form-control"></input>
                    </div>
                        
                    <div className="form-group">
                        <label for="password">密碼:</label>
                        <input type="text" id="password" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label for="repassword">密碼(重複):</label>
                        <input type="text" id="repassword" className="form-control"></input>
                    </div>
                        
                    <div className="form-group form-check">
                        <input type="checkbox" id="remember" className="form-check-input"></input>
                        <label for="remember" className="form-check-label">記住我 </label>
                    </div>
                    <div>
                        <button className= "btn btn-main" type="button">註冊</button>
                    </div>
                    
                </form>
                <div className="my-4">
                    <button className="btn btn-main" style={{width:'150px'}}><FontAwesomeIcon className="mr-2" icon={faGoogle} />Google 登入</button>
                </div>
            </div>
        );
    }
}

export default SiginUp;
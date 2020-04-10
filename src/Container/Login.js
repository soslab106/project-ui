import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="container d-flex flex-column align-items-center">
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
                        <input type="checkbox" id="remember" className="form-check-input"></input>
                        <label for="remember" className="form-check-label">記住我 </label>
                    </div>

                    <div className="form-group">
                        <a href="/">忘記密碼?</a>
                    </div>
                        
                    <button className= "btn btn-main" type="button">Submit</button>
                </form>
                <div className="my-4">
                    <button className="btn btn-main">Google 登入</button>
                </div>
            

            </div>
        );
    }
}

export default Login;
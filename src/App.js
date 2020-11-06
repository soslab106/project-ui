import { route } from "./route";
import React, { Component } from 'react';

// import App from './Components/App'
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const routes = route();


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
        };
    }

    logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
    };

    componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://140.119.19.99:8000/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    if (json.username) {
                        localStorage.setItem("email", json.email);
                        localStorage.setItem("username", json.username);
                        this.setState({ username: json.username });
                    } else {
                        this.logout();
                    }
                });
        }
    }




    render() {
        return (<React.Fragment>
            <NavBar logged_in={this.state.logged_in}
                username={this.state.username}
                logout={this.logout}
            /> {routes} <Footer />
        </React.Fragment>
        );
    }
}

export default App;

// ReactDOM.render(<Main />, document.getElementById('root'));
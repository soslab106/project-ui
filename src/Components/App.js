import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import NeuralNetworkIntro from '../Container/NeuralNetworkIntro'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <NeuralNetworkIntro/>

                <Footer />
            </div>
        );
    }
}

export default App;
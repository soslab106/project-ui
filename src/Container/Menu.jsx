import React, { Component } from 'react';
import Square from '../Components/Square';

class Menu extends Component {
    render() {
        return (
            <div class="container d-flex flex-column align-items-center p-3 mb-2">
                <div class="d-flex">
                <Square
                    link=''
                    buttonText='Testing'
                />
                <Square
                    link=''
                    buttonText='TL'
                />
                </div>
                <div className='d-flex'>
                <Square
                    link=''
                    buttonText='AIInfo'
                />
                <Square 
                    link=''
                    buttonText='個人資料'
                />
                </div>
            </div>
        );
    }
}

export default Menu;
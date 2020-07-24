import React, { Component } from 'react';
import Square from '../Components/Square';

class Menu extends Component {
    render() {
        return (
            <div>
                <Square
                    link=''
                    buttonText='Testing'
                />
                <Square
                    link=''
                    buttonText='TL'
                />
                <Square
                    link=''
                    buttonText='AIInfo'
                />
                <Square
                    link=''
                    buttonText='個人資料'
                />

            </div>
        );
    }
}

export default Menu;
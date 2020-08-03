import React, { Component } from 'react';
import Square from '../Components/Square';
import MenuImg from '../Components/MenuImg';
class Menu extends Component {
    render() {
        return (
            <div class="container d-flex flex-column align-items-center p-3 mb-2">

                <MenuImg
                    imgpath='/logo192.png'
                    icontitle='Testing'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    iconsubtitle1='AAAAAA'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg>
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='TL'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    iconsubtitle1='AAAAAA'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg> 
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='人工智慧'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    iconsubtitle1='AAAAAA'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg> 
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='應用新知'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    iconsubtitle1='AAAAAA'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg>

              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='模型詳細資訊(?)'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    iconsubtitle1='AAAAAA'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg>

                {/* <div class="d-flex">
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
                </div> */}
            </div>
        );
    }
}

export default Menu;
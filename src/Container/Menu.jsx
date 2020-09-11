import React, { Component } from 'react';
import Square from '../Components/Square';
import MenuImg from '../Components/MenuImg';
class Menu extends Component {
    render() {
        return (
            <div class="container d-flex flex-column align-items-center p-3 mb-2">

                <MenuImg
                    imgpath='/logo192.png'
                    icontitle='執行模型'
                    iconsubtitle='使用模型
                    想知道當代模型具有那些功能，並且有哪些結果嗎，快來體驗看看吧！'
                    
                ><a href="/TestingMenu">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg>
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='客製化訓練模型'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                    
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg> 
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='人工智慧基礎知識'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                  
                ><a href="/SignUp">
               <div> <button className="btn btn-lg btn-main">GO</button></div>
              </a></MenuImg> 
              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='人工智慧應用新知'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                  
                ><a href="/SignUp">
                <button className="btn btn-lg btn-main">GO</button>
              </a></MenuImg>

              <MenuImg
                    imgpath='/logo192.png'
                    icontitle='個人資訊'
                    iconsubtitle='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                               
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
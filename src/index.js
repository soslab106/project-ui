import React from 'react';
import ReactDOM from 'react-dom'

import App from './Components/App'


ReactDOM.render(<App />, document.querySelector('#root'))

/////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './component/routes';
import { renderRoutes } from 'react-router-config'
import './index.css';
import Navbar from './component/Frame/Navbar'

//login = localstorage sess or cookie
ReactDOM.render((
    <BrowserRouter>
        <Navbar login={true} />
        <div className='d-flex'>
            {renderRoutes(routes)}
        </div>
    </BrowserRouter>
), document.getElementById('root'));


// ReactDOM.render(<Main />, document.getElementById('root'));

// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Greeter from './Greeter.jsx';
import './main.css';//使用require导入css文件
import { Router, Route, hashHistory } from 'react-router';

const App = ()=>{
    return <main>home</main>
};

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('root')
);

//render(<Greeter />, document.getElementById('root'));


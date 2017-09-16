import React,{ Component } from 'react';
import { render, findDOMNode } from 'react-dom'; // 按需引入react-dom模块下子方法或属性,打包体积更小，颗粒化程度更高
// import ReactDOM from 'react-dom'; // 引入react-dom的默认输出模块，该模块下挂载了ReactDOM的所有方法
import { Router,Route,Link,hashHistory,browserHistory } from 'react-router';
// import {Route, BrowserRouter as Router} from 'react-router-dom'; // ^4.0.0+
// import Greeter from './Greeter.jsx';
// import './main.css'; // ES6 import直接引入一个模块，而不制定模块名,会直接执行该模块，这里直接将main.css插入到了当前页面文档中

import List from './List.js';

class App extends Component {
    render(){
        console.log(this,'this');
        return (
            <main>
                <div><Link to="Repos">Repos</Link></div>
                <div><Link to="About">About</Link></div>
                <div><Link to='List/12312'>List</Link></div>
                {this.props.children}
            </main>
        )
    }
}
console.log(this,'top zuoyongyu');

class About extends Component {
    render(){
        return (
            <main>
                <h1>About</h1>
            </main>
        )
    }
}

class Repos extends Component {
    render(){
        return (
            <main>
                <h1>Repos</h1>
            </main>
        )
    }
}

// nesting writing
// render(
//     <Router history={hashHistory}>
//         <Route path='/' component={App}>
//             <Route path="/about" component={About} />
//             <Route path="/repos" component={Repos} />
//         </Route>
//     </Router>,
//     document.getElementById('root')
// );

// routes writing
const routes = (
    <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}/>
        <Route path="/List/:id" component={List} />
    </Route>
);

// 原生跳转
// render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));

// hash跳转
render(<Router routes={routes} history={hashHistory} />, document.getElementById('root'));

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexLink, hashHistory, IndexRoute,Redirect  } from 'react-router';

const About = React.createClass({
    render(){
        return <div>About</div>
    }
});

const Inbox = React.createClass({
    render(){
        return (
            <div>
                <h2>Inboxs</h2>
                {this.props.children || "Welcome to your Inbox"}
                {this.props.someExtraProp}
            </div>

        )
    }
});

const Home = React.createClass({
    render(){

        return <div>Home{this.props.someExtraProp}</div>
    }
});

// 不使用路由的方式
// const App = React.createClass({
//     getInitialState() {
//         return {
//             route: window.location.hash.substr(1)
//         }
//     },
//     componentDidMount() {
//         window.addEventListener('hashchange', () => {
//             this.setState(
//                 {route: window.location.hash.substr(1)},
//                 console.log(this.state.route)
//             )
//         })
//     },
//
//     render() {
//         let Child;
//         switch (this.state.route) {
//             case '/about': Child = About; break;
//             case '/inbox': Child = Inbox; break;
//             default:      Child = Home;
//         }
//
//         return (
//             <div>
//                 <h1>App</h1>
//                 <ul>
//                     <li><a href="#/about">About</a></li>
//                     <li><a href="#/inbox">Inbox</a></li>
//                 </ul>
//                 <Child/>
//             </div>
//         )
//     }
// });
// render(<App />, document.getElementById('root'));


// const Message = React.createClass({
//     render() {
//         console.log(this.props,'------props');
//         let params = this.props.router.params;
//
//         return <h3>Message{params.id || '--'}</h3>
//     }
// });

const Message = React.createClass({
    getInitialState() {
        return {
            message: 10086,
            query:'null1'
        }
    },
    componentDidMount() {
        // 来自于路径 `/inbox/messages/:id`
        const id = this.props.params.id;
        const query = this.props.location.query ? this.props.location.query.xxx : 'null2';

            if(this.props.location.query){
                console.log(this.props.location.query.xxx,'this.props.query.xxx');
            }
        this.setState({ message: id,query: query })
    },
    render() {
        // console.log(this.props,'------props');
        // let message = this.state.message || '';
        // <h3>Message:id { message || '--'}{this.state.query}</h3>
        return(
                <h3>Message {this.props.params.id}{this.props.someExtraProp}</h3>
        )
    }
});




const App = React.createClass({
    getInitialState() {
        return { showBackButton: false }
    },
    componentWillReceiveProps(nextProps) {
        const routeChanged = nextProps.location !== this.props.location
        this.setState({ showBackButton: routeChanged })
    },
    render() {
        console.log(this.props,'----------this.props------------');
        let children = React.cloneElement(this.props.children, {someExtraProp: '参数传递' });
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                    <li><IndexLink to="/">Home</IndexLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/inbox/message/12312312">Message</Link></li>
                </ul>

                {/*
                 接着用 `this.props.children` 替换 `<Child>`
                 router 会帮我们找到这个 children
                 */}
                {/*{this.props.children}*/}
                {children}
            </div>
        )
    }
});

const NavLink = React.createClass({
    render(){
        return <Link {...this.props} activeClassName="active"/>
    }
});

const NoMatch = ()=>{
    return <aside>404</aside>
};
// 使用路由
render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="message/:id" component={Message} />
                <Redirect from="messageX/:id" to="/message/:id" />
            </Route>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>
    , document.getElementById('root')
);

// 路由对象写法
// const routes = {
//     path: '/',
//     component: App, // 组件是变量，不能用引号包裹起来
//     childRoutes: [
//         { path: 'about', component: About },
//         { path: 'inbox', component: Inbox },
//     ]
// };
// render(<Router routes={routes} history={hashHistory} />, document.getElementById('root'));






// 基础配置
// import React,{ Component } from 'react';
// import { render, findDOMNode } from 'react-dom'; // 按需引入react-dom模块下子方法或属性,打包体积更小，颗粒化程度更高
// // import ReactDOM from 'react-dom'; // 引入react-dom的默认输出模块，该模块下挂载了ReactDOM的所有方法
// import { Router,Route,Link,hashHistory,browserHistory } from 'react-router';
// // import {Route, BrowserRouter as Router} from 'react-router-dom'; // ^4.0.0+
// // import Greeter from './Greeter.jsx';
// // import './main.css'; // ES6 import直接引入一个模块，而不制定模块名,会直接执行该模块，这里直接将main.css插入到了当前页面文档中
//
// import List from './List.js';
//
// class App extends Component {
//     render(){
//         console.log(this,'this');
//         return (
//             <main>
//                 <div><Link to="Repos">Repos</Link></div>
//                 <div><Link to="About">About</Link></div>
//                 <div><Link to='List/12312'>List</Link></div>
//                 {this.props.children}
//             </main>
//         )
//     }
// }
// console.log(this,'top zuoyongyu');
//
// class About extends Component {
//     render(){
//         return (
//             <main>
//                 <h1>About</h1>
//             </main>
//         )
//     }
// }
//
// class Repos extends Component {
//     render(){
//         return (
//             <main>
//                 <h1>Repos</h1>
//             </main>
//         )
//     }
// }
//
// // nesting writing
// // render(
// //     <Router history={hashHistory}>
// //         <Route path='/' component={App}>
// //             <Route path="/about" component={About} />
// //             <Route path="/repos" component={Repos} />
// //         </Route>
// //     </Router>,
// //     document.getElementById('root')
// // );
//
// // routes writing
// const routes = (
//     <Route path="/" component={App}>
//         <Route path="/about" component={About}/>
//         <Route path="/repos" component={Repos}/>
//         <Route path="/List/:id" component={List} />
//     </Route>
// );
//
// // 原生跳转
// // render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
//
// // hash跳转
// render(<Router routes={routes} history={hashHistory} />, document.getElementById('root'));

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

// main.js
import React,{ Component } from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';//使用require导入css文件
import { Router, Route, hashHistory,Link  } from 'react-router';
//import {Route, BrowserRouter as Router} from 'react-router-dom'; // ^4.0+
//render(<Router/>, document.getElementById('root'));

class App extends Component {
    render(){
        return (
            <main>
                <h1>Home</h1>
                <div><Link to="Repos">Repos</Link></div>
                <div><Link to="About">About</Link></div>
                {this.props.children}
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
class About extends Component {
    render(){
        return (
            <main>
                <h1>About</h1>
            </main>
        )
    }
}
//render(<Greeter />, document.getElementById('root'));
// render((
//     <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     </Router>
// ), document.getElementById('root'));
let routes = (
    <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Route>
)
render(<Router routes={routes} history={hashHistory} />, document.getElementById('root'));
import React, { Component } from 'react'
// import ReactDOM, {render} from 'react-dom'
import ReactDOM from 'react-dom'
import '../assets/styles/common.less'
//引入路由模块

import { Router, Route,hashHistory} from 'react-router';


// 引入自定义组件
import Login from './Login/LoginPage'
import Home from './Home/Home'
import Registor from './Login/Registor'




class App extends Component {
  render() {
    return (
      <div className='app'>
      <Router history={hashHistory}>
            <Route path='/' component={Home}></Route>      
            <Route path='/Home' component={Home}></Route>      
            <Route path='/Login' component={Login}></Route>
            <Route path='/Registor' component={Registor}></Route>
      </Router>

     {/*    {<Login/>}
        <Home/> */}
       {/* <Registor/> */}
      </div>
    )
  }
}

export default App;



// render()
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

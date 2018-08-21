// 1. 引入核心模块
import React, { Component } from 'react'

// 2. 引入样式文件
import '../../assets/styles/login.less'

import logoImg from '../../assets/images/1.png';
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

// 3. 声明并导出组件
export default class LoginPage extends Component {
  render() {
    return (
      // 登录容器
      <div className='login-box'>
        <form >
          <img src={logoImg} alt=""  className='loginImg'/>
          <FormInput iconImg='shouji'/>
          <FormInput iconImg='suo'/>
          <FormButton value='登录'/>       
          <FormButton value='忘记密码?' Link={true}/>       
          <FormButton value='免费注册' inline={true}/>       
          <FormButton value='游客登录' inline={true}/>       
        
        </form>
         
      </div>
    )
  }
}

import React, { Component } from 'react'
// 2. 引入样式文件
import '../assets/styles/formButton.less'

export default class FormButton extends Component {
  render() {
    //接收传入的值
    let {Link,inline,value}=this.props;  
    //定义样式
    let formBtn='formBtn';
    if(inline===true){
      formBtn+='in'
    }
    return (
      Link===true?    
      <p className='link'>{value}</p>:
      <button className={formBtn}>{value}</button>

    )
  }
}

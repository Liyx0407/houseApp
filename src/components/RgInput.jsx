import React, { Component } from 'react'
// 2. 引入样式文件
import '../assets/styles/rgInput.less'

export default class RgInput extends Component {
  render() {
      let {phone,value,btnValue}=this.props;
      console.log(btnValue,phone,this.props);
    return (
        btnValue===true?
        <div className='rgInput'>
            <label htmlFor="">
                {value}
                <input type="text"/>
            </label>
        </div>:
        <div className='rgInput'>
            <label htmlFor="">
                {value}
                <input type="text"/>
                <button >
                   {btnValue}
                </button>
            </label>
        </div>
    )
  }
}

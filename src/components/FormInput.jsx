import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/formInput.less'



export default class FormInput extends Component {
  //缺省配置
  static defaultProps={
    type:'text'
  }

  //传入的属性约束
  static propTypes={
    type:PropTypes.string,
    iconImg:PropTypes.string
  }
  
  render() {

    //接收传入的值

    let {iconImg,type}=this.props;
    return (
  
      <div className='form-group'>
        <label htmlFor="">
          <i className={'left-icon iconfont icon-'+iconImg}></i>
          <input type={type}/>
        </label>
      </div>
    )
  }
}

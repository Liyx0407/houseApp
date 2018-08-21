import React, { Component } from 'react'

// 2. 引入样式文件
import '../assets/styles/rgheader.less'

export default class Rgheader extends Component {
  render() {
    return (
      <div className='regHeader'>
        <i className='iconfont icon-fanhui'></i>
        {this.props.value}
      </div>
    )
  }
}

import React, { Component } from 'react'
// 2. 引入样式文件
import '../assets/styles/serch.less'

export default class serch extends Component {
  render() {
    return (
      <div className='serch'>
            <select name="" id="">
                <option value="成都">成都</option>
                <option value="资阳">资阳</option>
            </select>
           <form action="">
              <i className='iconfont icon-search'></i>
              <input type="text"/>
           </form>
            <span>
                <i className='iconfont icon-xiazai20'></i>
                地图
            </span>
      </div>
    )
  }
}

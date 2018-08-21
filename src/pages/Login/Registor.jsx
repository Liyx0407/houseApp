import React, { Component } from 'react'
//引入antd核心样式库
import 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/dist/antd-mobile.css'

//引入自定义样式
import '../../assets/styles/registor.less'
import { NavBar, Icon } from 'antd-mobile';

//自定义组件



export default class Registor extends Component {
  render() {
    return (
      <div className='registor-box'>
          <NavBar
              className='rgheader'
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
              ]}
          >手机注册
    </NavBar>
      </div>
    )
  }
}

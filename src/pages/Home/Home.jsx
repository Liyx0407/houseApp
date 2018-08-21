import React, { Component } from 'react'
//import PropTypes from 'prop-types'
// 2. 引入样式文件
import '../../assets/styles/home.less'


//自定义组件
import Serch from '../../components/Serch'
import Banner from '../../components/Banner'
import Service from '../../components/Service'
import GuessYouLike from '../GuessYouLike/GuessYouLike'



export default class Home extends Component {
  
 
  render() {

    var ServiceNav=[
      {
        value:'新房',
        imgName:'2.1.png',
        isInfo:false
      },
      {
        value:'二手房',
        imgName:'2.2.png',
        isInfo:false
        
      },
      {
        value:'租房',
        imgName:'2.3.png',
        isInfo:false        
      },
      {
        value:'商品写字楼',
        imgName:'2.4.png',
        isInfo:false        
      },
      {
        value:'买房',
        imgName:'2.5.png',
        isInfo:false
      },
      {
        value:'海外地产',
        imgName:'2.6.png',
        isInfo:false
        
      },
      {
        value:'小区房价',
        imgName:'2.7.png',
        isInfo:false        
      },
      {
        value:'问答',
        imgName:'2.8.png',
        isInfo:false        
      },
    ]
    var newsInfo=[
      {
        value:'独家优惠',
        imgName:'2.9.png',
        isInfo:true,
        color:'red'
      },
      {
        value:'免费看房',
        imgName:'2.10.png',
        isInfo:true,
        color:'#ccc'            
      },
      {
        value:'信用贷',
        imgName:'2.11.png',
        isInfo:true,
        color:'#FFB347'               
      },
      {
        value:'房市咨讯',
        imgName:'2.12.png',
        isInfo:true,
        color:'#89C4EC'               
              
      },
    ]
    return (
      <div className='indexBg'>
        <Serch/>
        <Banner/>
        <Service ServiceNav={ServiceNav}/>
        <Service ServiceNav={newsInfo}/>
        <GuessYouLike/>
      </div>
    )
  }
}

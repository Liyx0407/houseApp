import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 2. 引入样式文件
import '../assets/styles/service.less'

import ServiceItem from './ServiceItem'
export default class service extends Component {
   //定义全局上下文参数
   static childContextTypes={
    value:PropTypes.string
  }

  //定义全局上下文参数
  getChildContext() {
    return {
     
    }
  }

  componentDidMount(){
    
  }
  render() {
    let arr =[];
    let datas=this.props.ServiceNav;
    
   

    var imgName,value,isInfo;

    for (let i = 0; i <datas.length; i++)  {
       imgName=datas[i].imgName;
       value=datas[i].value;
       isInfo=datas[i].isInfo;
       //console.log(isInfo);
       //console.log(datas[i].color);
       
      //console.log(datas[i]);
      //debugger;
      arr.push(<ServiceItem 
                imgName={imgName}
                value={value}
                key={i}
                isInfo={isInfo}
                color={datas[i].color}
              />)
              
    }
    return (
      <div className='service-box'>
        {/* <ServiceItem  imgName={this.props.imgName} value={this.props.value}/>
        <ServiceItem  imgName={this.props.imgName} value={this.props.value}/>
        <ServiceItem  imgName={this.props.imgName} value={this.props.value}/>
        <ServiceItem  imgName={this.props.imgName} value={this.props.value}/> */}
        {arr}

      </div>
    )
  }
}

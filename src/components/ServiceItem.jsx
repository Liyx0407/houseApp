import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 2. 引入样式文件
import '../assets/styles/ServiceItem.less'
//import imgA from '../assets/images/1.png';

export default class ServiceItem extends Component {
    //子组件数据参数
    static contextTypes={
        value:PropTypes.string
    } 
    
    render() {
        //let value=this.context;
        let {imgName,isInfo,color}=this.props;
        let small='samll'
        if(isInfo){
            small+='icon'
        }
        //console.log(small,isInfo,color)
        return (
            <div className='small-box' >
                <div className='top'>
                    <img src={require('../assets/images/'+imgName)} alt="" className={small}/>
                </div>
                <p style={{color:color}}>{this.props.value}</p>
            </div>
        )
    }
}

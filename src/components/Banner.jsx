import React, { Component } from 'react'
// 2. 引入样式文件
import '../assets/styles/banner.less'
import  banner1 from '../assets/images/banner1.jpg'
import  banner2 from '../assets/images/banner2.jpg'
import { Carousel } from 'antd-mobile';

export default class serch extends Component {
  state = {
    data: ['1', '2'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [banner1, banner2],
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    )
  }
}

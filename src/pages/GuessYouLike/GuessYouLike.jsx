import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//引入antd核心样式库
import 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/dist/antd-mobile.css'
// 2. 引入样式文件
import '../../assets/styles/guessYouLike.less'
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { ListView,Flex } from 'antd-mobile';

//定义数据
const data = [
    {
        img: 'listimg1.jpg',
        title: '融创天府逸家商铺1',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 110平米',
        tags: ['商场','绕城外','公园','单价低'],
        price:'15666元/平米'
    },
    {
        img: 'listimg2.jpg',
        title: '融创天府逸家商铺2',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','绕城外','公园'],
        price:'15666元/平米'        
    },
    {
        img: 'listimg3.jpg',
        title: '融创天府逸家商铺3',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','单价低']
    },
];


export default class GuessYouLike extends Component {
    //构造初始化
        constructor(props) {
          super(props);
        // 初始化ListView的数据源
          const dataSource = new ListView.DataSource({
              //当数据改变
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
      
          //状态
          this.state = {
            dataSource,//将数据放入到状态中
            isLoading: true,
          };
          //定义行渲染
          this.renderRow=this.renderRow.bind(this);
          //定义头部渲染
          this.renderHeader=this.renderHeader.bind(this);
          //定义分割样式
          this.renderSeparator=this.renderSeparator.bind(this);
        }
      
        //组件挂载完毕
        componentDidMount() {
            //使用计时器模拟ajax
          setTimeout(() => {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(data),//将数据对象克隆到数据里面
              isLoading: false,
            });
          }, 600);
        }


        //数据渲染,取出每一条数据
        renderRow(rowData, sectionID, rowID){
            let tagArr=rowData.tags.map((v,i)=>{
                //console.log(v);
                switch (v) {
                    case '商场':return(
                        <span className='green' key={i}>
                            {v}
                        </span>
                    )
                    case '绕城外':return(
                        <span className='orange' key={i}>
                            {v}
                        </span>
                    )
                    case '公园':return(
                        <span className='blue' key={i}>
                            {v}
                        </span>
                    )
                    default:return(
                            <span key={i}>
                                {v}
                            </span>
                        )
                        break;
                }
            })
            
        
            return (
                <Flex className='list-box'>
                    
                    <Flex.Item className="left-box">
                        <img src={require('../../assets/images/'+rowData.img)} alt="" />
                          
                    </Flex.Item>
                    <Flex.Item className="right-box">
                        <p className='title'> {rowData.title}</p>
                        <p className='address'> {rowData.address}</p>
                        <p className='areasize'> {rowData.areasize}</p>
                        <p className='tags'> {tagArr}</p>
                        <p className='price'>{rowData.price?rowData.price:"售价待定"}</p>                    
                    </Flex.Item>
                </Flex>
            )
        }


        //分割线渲染
        renderSeparator(sectionID, rowID){
            return(
                <div
                    key={`${sectionID}-${rowID}`}                
                    style={{
                        backgroundColor: '#f0f0f0',
                        height: 1,
                        borderTop: '1px solid #ECECED',
                        borderBottom: '1px solid #ECECED'
                    }}
                />
            
            )
        }

        //页头渲染
        renderHeader(){
            return(
                <div className='header'>
                    猜你喜欢
                </div>
            )

        }

        // 页脚渲染
        renderFooter(){
            return (
                <div style={{ padding: 5, textAlign: 'center' }}>
                    {this.state.isLoading ? '加载中...' : '加载完成'}
                </div>
            )
        }
      
  render() {
    return (
        <ListView
            //必备 数据来源
            dataSource={this.state.dataSource}
            //必备,拿到每一条数据
            renderRow={this.renderRow}            
            //标题
            renderHeader={this.renderHeader}
            //使用 html 的 body 作为滚动容器
            useBodyScroll
            //分割线
            renderSeparator={this.renderSeparator}
         
      />
    )
  }
}


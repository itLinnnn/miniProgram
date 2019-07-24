import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtTabBar, AtTabs, AtTabsPane, AtCard, AtFloatLayout, AtGrid, AtCalendar } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      isOpened: false
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  handleClose (value) {
    this.setState({
      isOpened: value
    })
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '快来查'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
     
      <View className='index'>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '发现', iconType: 'camera' },
            { title: '我的', iconType: 'user', text: '100', max: '99' }
          ]}
          onClick = {this.handleClick.bind(this)}
          current = {this.state.current}
          selectedColor='#3D52A1'
        />
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem className='swiper-item'>
            <View className='img-area'>
              <Image src='https://cdn.haimati.cn/himo/ba893b15160ddc5d02dd709510f2e631.jpg'/>
            </View>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <View className='img-area'>
              <Image src='https://cdn.haimati.cn/himo/0c71643b4063c9f9ef8ecf015766cbf3.jpg'/>
            </View>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <View className='img-area'>
              <Image src='https://cdn.haimati.cn/himo/7445401b1127ed19e7a22ae68fee031e.jpg'/>
            </View>
          </SwiperItem>
        </Swiper>
        
        <AtTabs

          className='tabs'
          current={this.state.current}
          scroll
          animated
          tabList={[
            { title: '学习'},
            { title: '天气' },
            { title: '股票' },
            { title: '汽车' },
            { title: '新闻' },
            { title: '音乐' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View style='font-size:18px; padding-top: 40px'>
              <AtCard
                extra='说明'
                title='类别'
                thumb='https://cdn.himokids.com/HMA_Kids_Upload/dt-idphoto.jpg'
              >
                <AtGrid data={
                [
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '新华字典'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '牛津字典'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '汉语词典'
                  },
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                    value: '成语词典'
                  },
                  {
                    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                    value: '数学公式'
                  },
                  {
                    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                    value: '元素周期表'
                  }
                ]
              } />
              </AtCard>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;padding-top: 40px'>
              <AtCalendar />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
        <AtFloatLayout isOpened={this.state.isOpened} title="这是个标题" onClose={this.handleClose.bind(this)}> 
        </AtFloatLayout>
      </View>
    )
  }
}

let bmap = require('../../lib/bmap-wx.js')
Page({
    //获取当前天气数据
    init(params) {
        let that = this
        let BMap = new bmap.BMapWX({
            ak: globalData.ak,
        })
        BMap.weather({
            location: params.location,
            fail: that.fail,
            success: that.success,
        })
    },
    //获取地理位置
    fail(res) {
      wx.stopPullDownRefresh()
      let errMsg = res.errMsg || ''
      // 拒绝授权地理位置权限
      if (errMsg.indexOf('deny') !== -1 || errMsg.indexOf('denied') !== -1) {
        wx.showToast({
          title: '需要开启地理位置权限',
          icon: 'none',
          duration: 3000,
          success(res) {
            let timer = setTimeout(() => {
              clearTimeout(timer)
              wx.openSetting({})
            }, 3000)
          },
        })
      } else {
        wx.showToast({
          title: '网络不给力，请稍后再试',
          icon: 'none',
        })
      }
    },
    //地理位置获取成功之后，执行 success
    success (data) {
        wx.stopPullDownRefresh()
        let now = new Date()
        // 存下来源数据
        data.updateTime = now.getTime()
        data.updateTimeFormat = utils.formatDate(now, "MM-dd hh:mm")
        let results = data.originalData.results[0] || {}
        data.pm = this.calcPM(results['pm25'])
        // 当天实时温度
        data.temperature = `${results.weather_data[0].date.match(/\d+/g)[2]}`
        wx.setStorage({
            key: 'cityDatas',
            data: data,
        })
        this.setData({
            cityDatas: data,
        })
    },
})

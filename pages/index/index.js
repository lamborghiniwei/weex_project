//index.js
const app = getApp()

Page({
  data: {
    swiperList: []
  },

  onLoad: function () {
    const _this = this
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: function (result) {
        console.log(result, 'result')
        _this.setData({
          swiperList: result.data.message
        })
      }
    })
  },
})

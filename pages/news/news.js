// pages/news/news.js
var data = require("../../static/news-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImages: ["../../images/news/timg.jpeg",
      "../../images/news/5g.jpeg",
      "../../images/news/ai.jpeg",
      "../../images/news/huawei.jpeg"
    ],
    newsList: data.newsData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var app = getApp();
    // this.setData({
    //   newList: data.newsData
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onOpenNewsDetail: function(event) {
    var index = event.currentTarget.dataset.indexId;
    wx.navigateTo({
      url: "./news-detail?index=" + index,
    })
  }
})
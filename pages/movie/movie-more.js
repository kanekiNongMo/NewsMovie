// pages/movie/movie-more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comingSoonList: [],
    showLoading : false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.getComingSoonList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (event) {
    this.setData({
      showLoading: true
    })
    this.getComingSoonList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onOpenDetail: function (event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/movie/movie-detail?movieId=' + movieId,
    })
  },
  getComingSoonList: function () {
    var _this = this;
    var start = _this.data.comingSoonList.length;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/coming_soon',
      data: {
        start: start,
        count: 12
      },
      success: function (data) {
        var tempList =_this.data.comingSoonList;
        for (var i = 0; i < data.data.subjects.length; i++) {
          tempList.push(data.data.subjects[i]);
        }
        _this.setData({
          comingSoonList: tempList,
          showLoading: false
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
  }
})
// pages/movie/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieId = options.movieId;
    console.log(movieId);
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/subject/' + movieId,
      success: function(data) {
        var movieDetail = data.data;
        var content = movieDetail.summary.replace(/\\n/g, '\n');
        movieDetail.summary = content;
        _this.setData({
          movieDetail: data.data
        })
      },
      fail: function(data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onPreviewImage: function (event) {
    var imageUrl = event.currentTarget.dataset.imageUrl;
    wx.previewImage({
      urls: [imageUrl],
    })
  }
})
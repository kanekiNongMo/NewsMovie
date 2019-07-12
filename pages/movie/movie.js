// pages/movie/movie.js
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
    inTheatersList: [],
    comingSoonList: [],
    top250List: [],
    searchList: [],
    showLoading: false,
    isSearching: false,
    isSearchEmpty: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    _this.getInTheatersList();
    _this.getComingSoonList();
    _this.getTop250List();
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
  onReachBottom: function(event) {
    this.setData({
      showLoading: true
    })
    this.getTop250List();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onOpenDetail: function(event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/movie/movie-detail?movieId=' + movieId,
    })
  },
  getInTheatersList: function() {
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      success: function (data) {
        _this.setData({
          inTheatersList: data.data.subjects
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
  },
  getComingSoonList: function () {
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/coming_soon',
      data: {
        count: 3
      },
      success: function (data) {
        _this.setData({
          comingSoonList: data.data.subjects
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
  },
  getTop250List: function() {
    var _this = this;
    var start = _this.data.top250List.length;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {
        start: start,
        count: 9
      },
      success: function (data) {
        var tempList = _this.data.top250List;
        for (var i = 0; i < data.data.subjects.length; i++) {
          tempList.push(data.data.subjects[i]);
        }
        _this.setData({
          top250List: tempList,
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
  },
  openMore: function(event) {
    wx.navigateTo({
      url: '/pages/movie/movie-more',
    })
  },
  onImageError: function(event) {
    var index = event.currentTarget.dataset.index;
    var top250List = this.data.top250List;
    var movieItem = top250List[index];
    movieItem.images.large = "../../images/error_img.jpg";
    top250List[index] = movieItem;
    this.setData({
      top250List: top250List
    })
  },
  getSearchList: function (queryValue) {
    var _this = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/search',
      data: {
        q: queryValue
      },
      success: function (data) {
        var searchList = data.data.subjects;
        var isSearchEmpty = false;
        if (searchList.length == 0) {
          isSearchEmpty = true
        }
        _this.setData({
          searchList: data.data.subjects,
          isSearching: true,
          isSearchEmpty: isSearchEmpty
        })
      },
      fail: function (data) {
        wx.showToast({
          title: '网络请求失败',
          icon: 'none'
        })
      }
    })
  },
  onSearch: function(event) {
    if (event.detail.value) {
      this.getSearchList(event.detail.value);
    }else {
      this.setData({
        isSearching: false
      })
    }
   
  }
})
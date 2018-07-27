// pages/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0,
    year:2016,
    reviews:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    that.setData({
      year:options.year
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    that.getReview(that.data.year)
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
    var that = this;
    
    that.setData({
      page:that.data.page +=1
    })
    
    that.getReview(that.data.year);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getReview:function(year){
    var that = this
    console.log(that.data.page)
    wx.request({
      url: 'https://coderminer.com/movie/review/'+year+'/'+that.data.page,
      success:function(res){
        if(res.statusCode == 200){
          let tmpList = that.data.reviews;
          for(let item of res.data){
            tmpList.push(item);
          }
          that.setData({
            reviews: tmpList
          })
        }
        
      },
    })
  }
})
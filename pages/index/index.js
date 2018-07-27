//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    
  },

  onReview:function(event){
    var that = this;
    var year = event.currentTarget.dataset.year;
    console.log(year)
    wx.navigateTo({
      url: '/pages/review/review?year='+year,
    })
  }

})

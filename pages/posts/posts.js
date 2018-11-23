// 只能用相对路径
var postsData = require("../../data/post_data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //而这个动作A的执行，是在onLoad事件执行之后发生的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key: postsData.postList
    });
  },
  onPostTap:function(event){
    var postId=event.currentTarget.dataset.postid;
    // console.log(postId);
    // 页面跳转
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  },
  onSwiperTap:function(event){
    // target和currentTarget的区别
    // target指的是当前点击的组件 currentTarget指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})
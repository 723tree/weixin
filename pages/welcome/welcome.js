Page({
  onTap:function(){
    // 将该页面设置为主页面的子页面，父子关系的跳转，子集最多为五个
    // wx.navigateTo({
    //   url: '../posts/posts'
    // });

    // 平行关系的跳转
    wx.switchTab({
      url: '../posts/posts',
    })
  }
})
var app=getApp();
var util=require('../../utils/utils.js');

Page({
  data:{
    inTheaters:{},
    comingSoon:{},
    top250:{},
    searchResult:{},
    containerShow:true,
    searchPanelShow:false,
  },

 
  onLoad:function(event){
    var inTheatersUrl =app.globalData.doubanBase+"/v2/movie/in_theaters"+"?start=0&count=3";
    var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon"+"?start=0&count=3";
    var top250Url = app.globalData.doubanBase + "/v2/movie/top250"+"?start=0&count=3";

    this.getMovieListData(inTheatersUrl,"inTheaters","正在热映");
    this.getMovieListData(comingSoonUrl,"comingSoon","即将上映");
    this.getMovieListData(top250Url,"top250","豆瓣Top250");
  },

  onMoreTap:function(event){
    var category=event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more-movie/more-movie?category='+category,
    })
  },

  onMovieTap:function(event){
    var movieId=event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'movie-detail/movie-detail?id='+movieId
    })
  },

  getMovieListData: function (url, settedKey, catetoryTitle){
    var that=this;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      method:"GET",
      success:function(res){
        // console.log(res);
        that.processDoubanData(res.data, settedKey, catetoryTitle)
      },
      fail: function () {
        console.log("failed");
      }
    })
  },

// 点击搜索框的叉叉图标后 显隐性切换
  onCancelImgTap:function(event){
    this.setData({
      containerShow: true,
      searchPanelShow: false,
    })
  },

// 点击搜索框后的 显隐性切换
  onBindFocus:function(event){
    this.setData({
      containerShow:false,
      searchPanelShow:true
    })
  },

  onBindConfirm:function(event){
    // 获取用户搜索框输入文字
    var text=event.detail.value;
    // console.log(text);
    var searchUrl=app.globalData.doubanBase+"/v2/movie/search?q=" + text;
    this.getMovieListData(searchUrl,"searchResult","");
  },

  processDoubanData:function(moviesDouban,settedKey,catetoryTitle){
    var movies=[];
    for(var idx in moviesDouban.subjects){
      var subject=moviesDouban.subjects[idx];
      var title=subject.title;
      if(title.length>=6){
        title=title.substring(0,6)+"...";
      }
      var temp={
        stars:util.convertToStarsArray(subject.rating.stars),
        title:title,
        average:subject.rating.average,
        coverageUrl:subject.images.large,
        movieId:subject.id
      }
      movies.push(temp)
    }
    var readyData={};
    readyData[settedKey]={
      catetoryTitle: catetoryTitle,
      movies:movies
    }
    this.setData(readyData);
  }
})

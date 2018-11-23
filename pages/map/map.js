
Page({
  data: {
    markers:[{
      iconPath:"/images/icon/map.png",
      id:0,
      latitude:23.099994,
      longitude:113.324520,
      width:50,
      height:50
    }],
    polyline:[{
      points:[{
        longitude:113.3245211,
        latitude:23.10229
      },{
        longitude:113.324520,
        latitude:23.21229
      }],
      color:"#FF0000DO",
      width:3,
      dottedLine:true,
    }]
  },
  markertap(e){
    wx.openLocation({
      latitude: 23.099994,
      longitude: 113.324520,
    });
  },
})
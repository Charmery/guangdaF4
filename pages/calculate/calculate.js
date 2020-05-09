// pages/calculate/calculate.js
Page({

  /**
   * 组件的初始数据
   */
  data: {

    breakfast:[['馒头','豆浆','白粥','汤面','牛奶','燕麦'],['50g','100g','150g','200g','250g','300g']],
    lunch:[['猪肉','鸡肉','鸭肉','鹅肉','牛肉','羊肉',],['50g','100g','150g','200g','250g','300g']],
    dinner:[['土豆','番茄','西红柿','马铃薯','番薯','冬瓜'],['50g','100g','150g','200g','250g','300g']],
    breakfast1:[0,0],
    lunch1:[0,0],
    dinner1:[0,0], 
    check:""
  },
  Pickbreakfast:function(e){
    console.log(e.detail.value)
    this.setData({
     breakfast1: e.detail.value,
    }) 

  },
  Picklunch:function(e){
    console.log(e.detail.value)
    this.setData({
     lunch1: e.detail.value
    }) 
  },
  Pickdinner:function(e){
    console.log(e.detail.value)
    this.setData({
     dinner1: e.detail.value
    }) 
  },
  checkone:function(e){
    this.setData({
      check:"ture"
    })
  }
})

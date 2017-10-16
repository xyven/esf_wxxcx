Page({
  data: {
    num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fitlevel: ['高档', '中档', '低档', '毛坯'],
    index: 0,
    multiArray1: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    multiIndex1: [0, 0],
    multiArray2: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    multiIndex2: [0, 0, 0, 0]
  },
  //事件响应函数
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange1: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerChange2: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  }
})
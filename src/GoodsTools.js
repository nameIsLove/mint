let obj = {
  goodsObj: {0: 1, 1: 3},
  addShopcart ({id, num}) {
    if (this.goodsObj[id]) {
      this.goodsObj[id] += num
    } else {
      this.goodsObj[id] = num
    }
  },
  deleteGoods () {

  }
}
export default obj

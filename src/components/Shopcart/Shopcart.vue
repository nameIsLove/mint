<template>
    <div>
        <nav-bar title="购物车"/>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(goods, index) in shopcart" :key="index">
                    <mt-switch v-model="goods.isSelected"></mt-switch>
                    <img :src="goods.thumb_path">
                    <div class="pay-calc">
                        <p>{{goods.title}}</p>
                        <div class="calc">
                            <span>￥{{goods.sell_price}}</span>
                            <span @click="substract(goods)">-</span>
                            <span>{{goods.buyNum}}</span>
                            <span @click="add(goods,index)">+</span>
                            <a href="javascript:;" @click="del(goods,index)">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{payment.count}}件，总价￥{{payment.total}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
// import Bus from '@/myBus.js'
export default {
  beforeRouteLeave (to, from, next) {
    let result = confirm('确定离开吗？')
    if (result) {
      let total = Object.values(test.goodsObj).reduce((pre, cur) => pre + cur)
      // Bus.$emit('shopcartNum',total)
      this.$store.dispatch('changeNumByAct', total)
      next()
    } else {
      next(false)
    }
  },
  data () {
    return {
      shopcart: []
    }
  },
  methods: {
    del (goods, i) {
      let num = goods.buyNum
      this.shopcart.splice(0, 1)
      // delete test.goodsObj[goods.id]
      this.$store.dispatch('addNumByAct', -num)
    },
    substract (goods) {
      if (goods.buyNum <= 1) {
        return
      }
      goods.buyNum--
      // test.goodsObj[goods.id] --
      this.$store.dispatch('addNumByAct', -1)
    },
    add (goods) {
      goods.buyNum++
      this.$store.dispatch('addNumByAct', 1)
    }
  },
  computed: {
    payment () {
      let count = 0
      let total = 0
      this.shopcart.forEach(goods => {
        if (goods.isSelected) {
          count += goods.buyNum
          total += goods.buyNum * goods.sell_price
        }
      })
      return {
        count,
        total
      }
    }
  },
  async created () {
    let url = '../../../static/req/cart' + Object.keys(test.goodsObj).join(',') + '.json'
    this.shopcart = (await this.$axios.get(url)).data.message
    for (let i = 0; i < this.shopcart.length; i++) {
      let goods = this.shopcart[i]
      let num = test.goodsObj[goods.id]
      if (num) {
        this.$set(goods, 'buyNum', num)
        this.$set(goods, 'isSelected', true)
      }
    }
  }
}

</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div>
    <!-- header -->
    <mt-header title="信息管理系统"></mt-header>

  <transition name="fade" mode="out-in">
  <router-view class="tmpl"/>
  </transition>

    <!--  tabbar -->
    <mt-tabbar v-model="selected">
        <mt-tab-item id="Home" @click.native="change('/Home')">
          <img slot="icon" src="../static/img/index.png" />
          首页
        </mt-tab-item>
      <mt-tab-item id="Member" @click.native="change('Member')">
        <img slot="icon" src="../static/img/vip.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart" @click.native="change('Shopcart')">
        <img slot="icon" src="../static/img/shopcart.png" />
        购物车 <mt-badge size='small' type='error'>{{getNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="Search" @click.native="change('Search')">
        <img slot="icon" src="../static/img/find.png" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Bus from '@/myBus.js'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getNum'
    ])
  },
  created () {
   
  },
  name: 'APP',
  data () {
    return {
      selected: '',
      totalNum: 0
    }
  },
  methods: {
    change (tag) {
      let newT = '/' + tag.toLocaleLowerCase()
      // eslint-disable-next-line eqeqeq
      if (this.$route.fullPath == newT || this.$route.fullPath == tag) {
        return false
      }
      this.$router.push({
        name: tag
      })
    }
  }
  // watch: {
  //   selected(newV, oldV) {
  //     console.log(1);
  //     this.$router.push({
  //       path: newV
  //     });
  //   }
  // }
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>

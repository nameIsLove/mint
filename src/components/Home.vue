<template>
  <div>
    <my-swipe url='../../static/req/swiper.json'></my-swipe>

    <!-- 九宫格 -->
    <my-ul class="grid">
      <my-li v-for="(item, index) in items" :key="index">
        <router-link :to="item.route">
          <span :class="item.className"></span>
          <div>{{item.title}}</div>
        </router-link>
      </my-li>
    </my-ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        { title: '新闻资讯', className: 'back-news', route: { name: 'NewsList' } },
        { title: '图文分享', className: 'back-pic', route: { name: 'PhotoList', query: {categoryId: 0} } },
        { title: '商品展示', className: 'back-goods', route: { name: 'GoodsShow', params: {page: 1} } },
        { title: '留言反馈', className: 'back-feed', route: { name: 'Home' } },
        {
          title: '搜索咨询',
          className: 'back-search',
          route: { name: 'Home' }
        },
        { title: '联系我们', className: 'back-callme', route: { name: 'Home' } }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 九宫格 */

.grid span {
  display: inline-block;
  margin: 10px 0;
  width: 50px;
  height: 50px;
  background-repeat: round;
}

.back-pic {
  background-image: url(../../static/img/picShare.png);
}
.back-goods {
  background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
  background-image: url(../../static/img/feedback.png);
}
.back-search {
  background-image: url(../../static/img/search.png);
}
.back-callme {
  background-image: url(../../static/img/callme.png);
}
.back-news {
  background-image: url(../../static/img/news.png);
}

</style>

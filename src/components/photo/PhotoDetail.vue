<template>
  <div>
    <nav-bar title="图文详情" />
    <div class="all-layout">
      <div class="photo-title">
      <p>{{photoInfo.title}}</p>
      <span>发起日期：{{photoInfo.add_time}}</span>
      <span>{{photoInfo.click}}次浏览</span>
      <span>分类：民生经济</span>
    </div>

    <vue-preview class="photo-image" :slides="imgs"></vue-preview>
    <!-- <my-ul>
      <my-li v-for="(img, index) in imgs" :key="index">
        <img v-lazy="img.src" class="photo-image" />
      </my-li>
    </my-ul>-->
    <div class="photo-desc">
      <p v-html="photoInfo.content"></p>
    </div>

    <!-- 使用评论组件 -->
    <comment :cid="$route.params.id" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      photoInfo: {},
      imgs: []
    }
  },
  created () {
    let { id: pid } = this.$route.params
    if (pid != 0) {
      console.log('暂无数据')
      return false
    } else {
      this.$axios
        .get(`../../../static/req/picContent/picContent${pid}.json`)
        .then(res => {
          this.photoInfo = res.data.message[0]
        })
      this.$axios
        .get(`../../../static/req/picContent/picImg${pid}.json`)
        .then(res => {
          this.imgs = res.data.message
          this.imgs.map(item => {
            item.msrc = item.src
            item.w = 100
            item.h = 100
            return item
          })
        })
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}

.photo-title {
  overflow: hidden;
}

.photo-title,
.photo-desc {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}

.photo-title p {
  color: #13c2f7;
  font-size: 20px;
  font-weight: bold;
}

.photo-title span {
  margin-right: 20px;
}

.photo-desc p {
  font-size: 18px;
}
.all-layout{
  height: calc(100vh - 140px);
  overflow-y: auto;
}

</style>

<template>
  <div>
    <nav-bar :title="title" />

    <!-- 新闻列表 -->
    <div id="demo">
      <ul>
        <li v-for="(item, index) in newList" :key="index">
          <router-link :to="{name:'NewsDetail',params:{id:index}}">
            <img
              :src="item.img_url"
              alt="图片"
            />
            <div class="news">
              <span>{{item.title}}</span>
              <div>
                <p>点击数:{{item.click}}</p>
                <p>发表时间:{{item.add_time.split('T')[0]}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$axios.get('../../../static/req/newList.json').then(res => {
      this.newList = res.data.message
    })
  },
  data () {
    return {
      title: '新闻列表',
      newList: []
    }
  }
}
</script>

<style scoped>
#demo{
  height: calc(100vh - 130px);
  overflow-y: auto;
  box-shadow: inset 0px 4px 7px 0px #aaa;
}

#demo li{
  padding: 20px 0px;
  border-bottom:2px solid #ccc;
}
#demo a {
  display: flex;
}
#demo img {
  height: 80px;
  width: 80px;
}
#demo a .news{
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
}
#demo a .news span{
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100vw - 120px);
  white-space: nowrap;
  font-size: 1.3rem;
  font-weight: bold;
}
#demo a .news div{
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
}
</style>

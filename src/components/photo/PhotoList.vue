<template>
  <div>
    <nav-bar title="图文分享"></nav-bar>

      <div class="photo-header">
        <ul>
          <li v-for="(item, index) in categories" :key="index">
            <a @click="navigateToCateById(item.id)" href="javascript:;">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="photo-list">
        <ul>
          <li v-for="(item, index) in imgs" :key="index">
            <router-link :to="{name:'PhotoDetail',params:{id:index}}">
              <img v-lazy="item.img_url" alt="图片" />
              <p>
                <span>{{item.title}}</span>
                <br />
                <span>{{item.zhaiyao}}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      imgs: [],
      categories: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    let { categoryId } = to.query
    this.loadImgsById(categoryId)
    next()
  },
  created () {
    let { categoryId } = this.$route.query
    this.loadImgsById(categoryId)

    this.$axios.get(`../../../static/req/photo/photoTitle.json`).then(res => {
      this.categories = res.data.message
      this.categories.unshift({ title: '全部', id: 0 })
    })
  },
  methods: {
    navigateToCateById (categoryId) {
      if (this.$route.query.categoryId == categoryId) {
        return false
      }
      this.$router.push({ name: 'PhotoList', query: { categoryId } })
    },
    loadImgsById (categoryId) {
      this.$axios
        .get(`../../../static/req/photo/photoList${categoryId}.json`)
        .then(res => {
          this.imgs = res.data.message
        })
    }
  }
}
</script>

<style scoped>
.photo-header li {
  list-style: none;
  display: inline-block;
  margin-left: 10px;
}
.photo-header ul {
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0px;
  margin: 5;
}
.photo-list {
  height: calc(100vh - 155px);
  overflow-y: auto;
}

.photo-list li {
  list-style: none;
  position: relative;
}
.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}
.photo-list ul {
  padding-left: 0px;
  margin: 0;
}
.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 0px;
}
.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 1rem;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

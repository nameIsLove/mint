<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in myimgs" :key="index">
        <img :src="item.img || item.src" alt="图片" />
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  name: 'my-swipe',
  props: ['url', 'imgs'],
  data () {
    return {
      myimgs: ''
    }
  },
  created () {
    if (this.url) {
      this.$axios
        .get(this.url)
        .then(res => {
          this.myimgs = res.data.message
        })
        .catch(err => console.log(err))
    }
  },
  watch: {
    imgs () {
      this.myimgs = this.imgs
    }
  }
}
</script>

<style scoped>
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}

</style>

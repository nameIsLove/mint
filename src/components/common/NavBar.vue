<template>
  <div id="tmp">
    <mt-header :title="title">
      <div @click="goback" slot="left">
        <mt-button icon="back">back</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
#tmp .mint-header {
  background-color: yellowgreen;
}
</style>

function Installer () {

}
Installer.install = function (Vue) {
  // 在template使用 <test></test>
  Vue.component('test', {
    template: `<h1>hehe</h1>`
  })

  //   在created使用 this.$log()
  let log = function () {
    console.log('我们自己插件的log函数')
  }
  Object.defineProperty(Vue.prototype, '$log', {
    set (newV) {
      console.log('该属性不可更改')
      // 这里可以修改 log = newV
    },
    get () {
      return log
    }
  })
}

export default Installer

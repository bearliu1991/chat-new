<template>
  <div id="bullet-box" class="mask" ref="bulletbox" :style="{left: Position.x + 'px', top: Position.y + 'px', bottom: Position.b + 'px'}">
    <div class="bullet-box-container">
      <slot name="bullet-box-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bulletbox",
    data() {
      return {
        initposition: this.position
      }
    },
    props: {
      position: {
        type: Object,
        default() { return {x: 0, y: 0} }
      }
    },
    computed: {
      Position() {
        return this.initposition
      }
    },
    mounted() {
      // 生成后， 判断该弹框底边是否超过桌面高度
      // 超过桌面高度则将bottom = 0px
      let bullet = this.$refs['bulletbox']
      let windowHeight = this.getViewPort().height
      let positionBottom = bullet.getBoundingClientRect().bottom
      if (windowHeight < positionBottom) {
        this.$set(this.initposition, "b", 0)
        this.$set(this.initposition, "y", null)
        bullet.style.top = null
      }
    },
    methods: {
      getViewPort() {
          if (document.compatMode === "BackCompat") {
            // 浏览器嗅探，混杂模式
              return {
                  width: document.body.clientWidth,
                  height: document.body.clientHeight
              };
          } else {
              return {
                  width: document.documentElement.clientWidth,
                  height: document.documentElement.clientHeight
              };
          }
      }
    }
  }
</script>

<style lang="stylus">
@import '~@/assets/css/index.styl';
  #bullet-box
    fixed()
    z-index:999
    .bullet-box-container
      padding:10px 0
      color(#000)
      bgColor(#fff)
      radius(3px)
      boxShadow(0 0 2px 2px #ddd)
</style>

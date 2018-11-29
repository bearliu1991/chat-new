<template>
    <div id="manager">
      <SiderMenu class="app_left"></SiderMenu>
      <div class="app_right">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  #manager
    height:100%
    overflow hidden
    .app_left
      width:60px
      float: left
    .app_right
      height: 100%
      float: left
      width: calc(100% - 60px)
    &::after
      clear: both
      display: block
      content: ''
</style>

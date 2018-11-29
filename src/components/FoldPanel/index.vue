<template>
  <div class="fold-panel">
    <div class="fold-title" @click="packUpToogle">
      <slot name="title"></slot>
      <Icon v-if="cantFold" type="ios-arrow-up" :class="{chevronAnimate: !foldStatu}" class="chevron"></Icon>
    </div>
    <div class="fold-container" ref="container" :class="{'fold-pick-up': !foldStatu}">
      <slot name="container"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foldPanel',
  props: {
    isFold: {
      type: Boolean,
      default: true
    },
    cantFold: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      foldStatu: this.isFold,
      styles: {
        height: ''
      }
    }
  },
  mounted() {
  },
  methods: {
    packUpToogle() {
      if (this.cantFold) {
        this.foldStatu = !this.foldStatu
        this.$nextTick(() => {
          this.$root.Bus.$emit('calcScrollHeight')
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.fold-panel
  .fold-title
    padding 21px 0
    position relative
    cursor pointer
    .chevron
      color #409eff
      position absolute
      right 0
      top 21.5px
      transition all 0.2s
    .chevronAnimate
      transform rotateZ(-180deg)
  .fold-container
    position relative
    transition all 0.2s
    overflow hidden
    &.fold-pick-up
      height 0 !important
</style>
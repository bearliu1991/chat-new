<template>
  <div class="os_pool">
    <div class="pool_title">抢单池</div>
    <div class="pool_list">
      <div class="no_data" v-if="false">
        <div class="img">
          <img src="@/assets/images/nopool.png" alt="">
        </div>
        <p class="tips">暂无待抢单</p>
      </div>
      <div class="have_data">
        <div class="padding_scroll">
          <table class="pool_table">
            <tr class="tr">
              <th>粉丝消息</th>
              <th>所属公众号</th>
              <th>所属客服</th>
              <th>消息时间</th>
              <th>操作</th>
            </tr>
          </table>
        </div>
        <div class="scroll_table">
          <TipsModal @changeScroll="closeTips" v-model="showTips" :styles="styles"></TipsModal>
          <ScrollBar ref="scrollPool" :topHeight="210" @topLoading="topLoading">
            <div class="padding_scroll">
              <table class="pool_table" :class="{translatePool: showTips}">
                <tr class="scroll_tr" v-for="(item, idx) in 20" :key="idx" :class="{tr_active: poolIndex === idx}" @click.stop="selectPool(idx)">
                  <td>
                    <div class="fans">
                      <div class="user_head">
                        <img class="user-img" src="/static/imgs/userHeader.png" alt="">
                      </div>
                      <div class="user_info">
                        <div class="user_name">来治猩猩的你</div>
                        <div class="user_tip">我一直认为，不是每一次工业或技术革命改变了世界，而是...</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="account">
                      <div class="account_img">
                        <img class="user-img" src="/static/imgs/userHeader.png" alt="">
                      </div>
                      <div class="account_name">正点财经</div>
                    </div>
                  </td>
                  <td>
                    {{item}}
                  </td>
                  <td>
                    111
                  </td>
                  <td>
                    <Button type="primary" @click.stop="robOrderPool">抢单</Button>
                  </td>
                </tr>
              </table>
            </div> 
          </ScrollBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OSPOOL',
  data() {
    return {
      showTips: false,
      styles: {
        paddingPosition: {
          paddingLeft: '40px',
          paddingRight: '40px',
          top: '0',
          left: '0'
        }
      },
      poolIndex: -1
    }
  },
  mounted() {
    this.$refs.scrollPool.updated()
  },
  methods: {
    closeTips(idx) {
      if (idx === 0) {
        this.$refs.scrollPool.setTop()
      } else {
        this.$refs.scrollPool.updated()
      }
    },
    topLoading(val) {
      if (val) {
         this.showTips = true
      } else {
        this.showTips = false
      }
    },
    selectPool(idx) {
      this.poolIndex = idx
      this.$emit('openRight')
    },
    robOrderPool() {
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/css/index.styl'
.os_pool
  width 100%
  height 100%
  background-color #ffffff
  text-align left
  .pool_title
    height 60px
    line-height 60px
    padding-left 20px
    font-size 16px
    font-weight bold
    border-bottom solid 1px #eee
  .pool_list
    height: calc(100% - 60px)
    position relative
    .no_data
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      .tips
        text-align center
        font-size 18px
        margin-top 30px
    .have_data
      height 100%
    .padding_scroll
      padding-left 40px
      padding-right 40px
    .scroll_table
      overflow hidden
      height: calc(100% - 50px)
      position relative
    .pool_table
      width 100%
      transition all 0.3s
      &.translatePool
        margin-top 50px
      .tr
        height 50px
        line-height 50px
      .scroll_tr
        height 70px
        &:hover
          cursor pointer
          background-color #e6f0f5
        &.tr_active
          background-color #e6f0f5
        td
          .fans
            display flex
            align-items center
            .user_head
              margin-right 12px
              width 40px
              height 40px
              .user-img
                width 100%
                height 100%
            .user_info
              .user_name
                ellipsis()
              .user_tip
                margin-top 11px
                font-size 12px
                ellipsis()
                color #979899
          .account
            display flex
            align-items center
            .account_img
              width 30px
              height 30px
              margin-right 10px
              .user-img
                width 100%
                height 100%
                border-radius 50%
          .ivu-btn
            width 60px
            font-size 14px
      tr
        th:nth-of-type(1), td:nth-of-type(1)
          width 35%
          padding-left 30px
        th:nth-of-type(2), td:nth-of-type(2)
          width 20%
        th:nth-of-type(3), td:nth-of-type(3)
          width 15%
        th:nth-of-type(4), td:nth-of-type(4)
          width 20%
        th:nth-of-type(5), td:nth-of-type(5)
          width 10%          
</style>
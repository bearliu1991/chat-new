<template>
  <div class="cooperation">
    <div class="coo_item">
      <div class="coo_title">选择协作客服（请选择您需要协作的客服）</div>
      <div class="coo_server">
        <ScrollBar>
          <div class="server_wrapper">
            <div class="my_server">
              <FoldPanel :cantFold="false">
                <div slot="title">
                  我的协作客服
                </div>
                <div slot="container">
                  <Row :gutter="15">
                    <Col :key="idx" span="6" v-for="(item, idx) in 4">
                      <div class="col_wrapper" @click="selectService(idx, 'my')" :class="{col_active_wrapper: myServiceIdx===idx}">
                        <div class="name">
                          <span class="coo_mingzi">郭军</span>
                          <span class="coo_zuoxi">(ZX005)</span>
                        </div>
                        <div class="coo_status">
                          <span class="circle"></span>
                          <span class="status_text">在线</span>
                        </div>
                        <div class="coo_active">
                          <Icon :class="{icon_active: myServiceIdx===idx}" type="checkmark-circled"></Icon>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div class="no_serve" v-if="false">
                    <span class="span1">您暂时未设置协作客服，</span><span class="span2">去设置</span>
                  </div>
                </div>
              </FoldPanel>
              <FoldPanel>
                <div slot="title">
                  其他客服
                </div>
                <div slot="container">
                  <Row :gutter="15">
                    <Col :key="idx" span="6" v-for="(item, idx) in 14">
                      <div class="col_wrapper" @click="selectService(idx, 'other')" :class="{col_active_wrapper: otherServiceIdx===idx}">
                        <div class="name">
                          <span class="coo_mingzi">郭军</span>
                          <span class="coo_zuoxi">(ZX005)</span>
                        </div>
                        <div class="coo_status">
                          <span class="circle"></span>
                          <span class="status_text">在线</span>
                        </div>
                        <div class="coo_active">
                          <Icon :class="{icon_active: otherServiceIdx===idx}" type="checkmark-circled"></Icon>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </FoldPanel>
            </div>
            <div class="other_server"></div>
          </div>
        </ScrollBar>
      </div>
    </div>
    <div class="coo_item">
      <div class="coo_title no_require">填写协作原因</div>
      <div class="write_reason">
        <Input class="textarea" type="textarea" :rows="3" placeholder="请填写协作原因，字数控制在100字以内。"></Input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cooperation',
  data() {
    return {
      myServiceIdx: -1,
      otherServiceIdx: -1
    }
  },
  methods: {
    selectService(idx, type) {
      if (type === 'my') {
        this.myServiceIdx = idx
        this.otherServiceIdx = -1
      } else {
        this.myServiceIdx = -1
        this.otherServiceIdx = idx
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/css/index.styl'
.cooperation
  .coo_item
    .coo_title
      background-color: #e6edf5
      height 40px
      font-weight bold
      line-height 40px
      position relative
      padding-left 20px
      &:after
        position absolute
        content '*'
        color: #f56c6c
        left 8px
      &.no_require
        margin-top 20px
        &:after
          content ''  
    .coo_server
      height 286px
      margin-top 20px
      .server_wrapper
        padding-left 20px
        padding-right 20px
        .no_serve
          text-align center
          height 70px
          line-height 70px
          .span1
            color: #cacbcc
          .span2
            cursor pointer
            color: #409fff
        .col_wrapper
          position relative
          border: solid 1px #c9cacb
          cursor pointer
          margin-bottom 15px
          border-radius 3px
          height 70px
          padding-left 20px
          line-height 1
          &.col_active_wrapper
            border solid 1px #409fff
          span
            display inline-block
            vertical-align top
          .name
            margin-top 18px
            .coo_zuoxi
              color: #979899
              font-size 12px
          .coo_status
            margin-top 10px
            .circle
              width 14px
              height 14px
              background-color: #09bb07
              border-radius 50%
              margin-right 7px
          .coo_active
            position absolute
            right 0
            bottom 0
            .icon_active
              color #409fff
  .write_reason
    margin-top 20px
    padding-left 20px
    padding-right 20px  
    .textarea
      .ivu-input
        resize none
</style>
<template>
  <div id="chat">
    <div class="chat_left">
      <ContactRecord></ContactRecord>
    </div>
    <div class="chat_right">
      <div class="nothing" v-if="(chatId < 0 || (newWinRecord.length > 0)) && !showPool">
        <div class="no_data_wrapper">
          <div class="img">
            <img src="@/assets/images/nothing.png" alt="">
          </div>
          <p class="significance">打开世界的另一扇窗</p>
          <p class="small_tips">主动一点，世界会更大</p>
        </div>
      </div>
      <div class="chat_frame" v-else>
        <div class="chat_loading" v-if="isLoadingChat">
          聊天切换中
        </div>
        <ChatFrame :dataId="chatId" v-else></ChatFrame>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactRecord from './contactRecord'
  import ChatFrame from './chatFrame'
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        status: 1,
        isLoadingChat: false
      }
    },
    computed: {
      ...mapState({
        newWinRecord: state => state.chat.newWinRecord,
        chatId: state => state.chat.chatId,
        showPool: state => state.grabPool.showPool
      })
    },
    mounted() {
      console.log(this.chatId)
      console.log(this.newWinRecord)
      this.$root.Bus.$on('changeChat', () => {
        console.log('正在切换中')
        this.isLoadingChat = true
        this.timer = setTimeout(() => {
          this.isLoadingChat = false
          clearTimeout(this.timer)
        }, 300)
      })
    },
    created() {},
    components: {ContactRecord, ChatFrame},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/index.styl'
  #chat
    flex_()
    height: 100%
    .chat_right
      display flex
      flex:1
      height: 100%
      .nothing
        flex: 1
        fn(40px)
        bgColor(#fff)
        setMiddle()
        .no_data_wrapper
          .significance
            font-size 18px
            margin-top 50px
          .small_tips
            margin-top 20px
            font-size 14px
            color: #606366
      .chat_frame
        display flex
        flex 1
        .chat_loading
          flex: 1
          fn(40px)
          bgColor(#fff)
          setMiddle()

</style>

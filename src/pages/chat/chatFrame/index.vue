<template>
  <div id="chat_frame" @mousewheel.stop="doNoting" :class="{showUserInfo: !showUserInfo }">
    <div class="chat_left" v-if="!showPool">
      <ChatTitle :dataId='dataId' @hideRightBar='hideRightBar'></ChatTitle>
      <ChatDetail :dataId='dataId'></ChatDetail>
      <chatEditor></chatEditor>
    </div>
    <div class="chat_left" v-if="showPool">
      <OsPool></OsPool>
    </div>
    <div class="chat_right">
      <div class="hiddle_user" @click="showUserInfo = !showUserInfo">
      </div>
      <UserInfo></UserInfo>
    </div>
    <BasicModal title="编辑标签" width="700" v-model="tagVisible">
        <TagAction :tagList="allTags" :myTags="myTags"></TagAction>
    </BasicModal>
    <BasicModal title="编辑分组" width="700" v-model="groupVisible">
        <GroupAction :groupList="groupList" v-model="currentGroup"></GroupAction>
        <div class="footer" slot="footer">
          <p class="group-selected"> 当前所选分组：<span>{{currentGroup.name || '无'}}</span></p>
          <Button type="primary" @click="groupOk">确定</Button>
          <Button type="ghost" @click="groupCancel">取消</Button>
      </div>
    </BasicModal>
  </div>
</template>

<script>
  import ChatTitle from '../chatTitle'
  import ChatDetail from '../chatRecord'
  import chatEditor from '../chatEditor'
  import UserInfo from '../userInfo'
  import OsPool from "../osPool"
  import TagAction from '../actionModal/tag'
  import GroupAction from '../actionModal/group'
  import {mapState} from 'vuex'

  export default {
    name: "chat_frame",
    data() {
      return {
        filter : false,
        showUserInfo: true,
        tagVisible: false,
        allTags: [
          {
            tagGroupId: 1,
            tagGroupName: '客户意向',
            tags: [{
              id: 11,
              name: '已成交'
            }]
          },
          {
            tagGroupId: 2,
            tagGroupName: '所属行业',
            tags: [{
              id: 21,
              name: 'IT行业'
            }]
          }
        ],
        myTags: [
          {
            tagGroupId: 1,
            tagGroupName: '客户意向',
            tags: [{
              id: 11,
              name: '已成交'
            }]
          }
        ],
        groupVisible: false,
        groupList:  [
          {
            id: 1,
            name: '杭州'
          },
          {
            id: 2,
            name: '上海'
          }
        ],
        currentGroup: {
          id: 1,
          name: '杭州'
        }
      }
    },
    computed: {
      ...mapState({
        showPool: state => state.grabPool.showPool
      })
    },
    mounted() {
      this.$root.Bus.$on('toggleTagModal', value => {
        this.tagVisible = value
      })
      this.$root.Bus.$on('toggleGroupModal', value => {
        console.log('分组')
        this.groupVisible = value
      })
    },
    props: ['dataId'],
    components: {ChatTitle, chatEditor, ChatDetail, OsPool, UserInfo, TagAction, GroupAction},
    watch: {
      showPool(val) {
        console.log(val)
      }
    },
    methods: {
      hideRightBar() {
        this.showUserInfo = !this.showUserInfo
      },
      groupCancel() {
        this.groupVisible = false
      },
      groupOk() {
        this.groupVisible = false
      },
      doNoting() {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/index.styl'
  .slide-fade-enter-active
    transition: all .8s ease
  .slide-fade-leave-active
    transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px)
    opacity: 0

  #chat_frame
    relative()
    width: 100%
    height: 100%
    bgColor(#f5f5f5)
    &.showUserInfo
      .chat_left
        right 0
      .chat_right
        transform: translateX(280px)
        .hiddle_user
            left -20px
            transform rotate(0deg) translateX(5px)
    .chat_left
      absolute()
      left 0
      top 0
      right 280px
      bottom 0
      font-size 14px
      transition: left .25s ease;
      bgColor(#efefef)
    .chat_right
      absolute()
      top 0
      right 0
      bottom 0
      width 280px
      bgColor(#fff)
      border-left:1px solid #eee
      box-shadow: -1px 0px 0px 0px #edeef0
      transition: transform .25s ease-out;
      .hiddle_user
        position absolute
        top: 14px
        width: 15px
        height 30px
        background url('../../../assets/images/close-icon.png') no-repeat center center
        background-size cover
        transform rotate(180deg) translateX(2px)
        transition all .25s ease-out;
        z-index: 10
</style>

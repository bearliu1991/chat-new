<template>
  <div class="groupWrap">
    <div id="group">
      <ScrollBar>
        <div class="group-inner">
          <div class="group-label">
          选择所属分组
        </div>
        <div class="group-wrap">
          <div class="group-list">
            <div class="tag" :class="{'tag-default': !(selectedGroup.id === item.id), 'tag-checked': selectedGroup.id === item.id }" v-for="item in groupList" :key="item.id" @click.stop="selectGroup(item)">
              <span>{{item.name}}</span>
              <div class="tagAction">
                <Icon type="edit" @click.stop="createNewGroup(item.id, item.name)"></Icon>
                <Icon type="android-delete" @click.stop="deleteGroup(item.id)"></Icon>
              </div>
            </div>
          </div>
          <div class="group-action">
            <p class="group-new" @click.stop="createNewGroup('', '')">新建分组</p>
            <p class="action-tip">当前分组已满50个</p>
          </div>
        </div>
        </div>
      </ScrollBar>
    </div>
    <BasicModal :title="modalOption.title" v-model="visible" width="300" @onOk="sureGroup">
      <div class="modal-form">
        <input type="text" placeholder="请输入组名" :value="focusGroup.name">
      </div>
    </BasicModal>
  </div>
</template>

<script>
  export default {
    props: {
      groupList: {
        type: Array,
        default: () => {
          return []
        }
      },
      value: null
    },
    data() {
      return {
        visible: false,
        selectedGroup: this.value || {},
        focusGroup: {},
        modalOption: {
          title:'新建分组'
        }
      }
    },
    watch: {
      value (val) {
          console.log(val)
          this.selectedGroup = val || {};
      }
    },
    methods: {
      showModal() {
        this.isVisible = true
      },
      createNewGroup(id, name) {
        this.focusGroup = {id, name}
        this.visible = true;
        if (id) {
          this.modalOption = {...this.modalOption, title: '编辑分组'}
        } else {
          this.modalOption = {...this.modalOption, title: '新建分组'}
        }
      },
      deleteGroup(id) {
        this.$confirm({
          title: "删除分组",
          content: "删除分组后，该分组下的粉丝没有所属分组，确定删除分组吗？",
          okText: '保存',
          cancelText: '取消',
          onOk: () => {
            alert('删除成功')
          }
        })
      },
      selectGroup(item) {
        this.$emit('input', item)
      },
      sureGroup() {
        alert(this.focusGroup.name)
      }
    }
  }
</script>

<style lang="stylus">
.groupModal {
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal {
      top: 0;
    }
    .ivu-modal-content {
      box-shadow: 0px 1px 6px 0px
        rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      border: solid 1px #cacbcc;
    }
    .ivu-modal-header {
      border: none;
      .ivu-modal-header-inner {
        font-size: 18px;
        font-weight: normal;
        color: #303133;
      }
    }
    .ivu-modal-footer {
      border: none;
      .footer {
        font-size: 14px;
        color: #303133;
      }
    }
    .ivu-modal-header {
      padding: 20px 20px 0;
    }
    .ivu-modal-body {
      padding: 0 20px 20px
    }
    .ivu-tabs-tab {
      padding: 32px 22px 18px 10px;
    }
    .ivu-tabs-ink-bar {
      visibility: hidden;
      display: none;
    }
  }
  #group {
    max-height: 360px;
    height: 240px;
    font-size: 14px;
    .wrapper-scroll {
      height: 100%;
    }
    .group-inner {
      padding-top:40px;
      display: flex;
    }
    .group-label {
        margin-right: 12px;
        color: #303133;
    }
    .group-wrap {
      flex: 1;
    }
    .tag {
        position: relative;
        display: inline-block;
        border: solid 1px #cacbcc;
        border-radius: 18px;
        padding: 0 28px;
        margin: 0 14px 16px 0;
        height: 36px;
        line-height: 36px;
        color: #606366;
        &-default:hover {
          border: solid 1px #59acff;
          background: #fff;
          color: #59acff;
        }
        &-checked {
          background: #59acff;
          border: none;
          color:#fff;
        }
        .tagAction {
          display: none;
          height: 20px;
          position: absolute;
          top: -10px;
          right: -16px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          line-height: 20px;
          padding: 0 6px;
          border-radius: 10px;
          .ivu-icon:not(:last-of-type) {
            margin-right: 4px;
          }
        }
        &:hover {
          .tagAction {
            display: block;
          }
        }
    }
    .group-action {
      margin-top: 10px;
      .group-new {
        color: #cacbcc;
      }
      .action-tip {
        margin-top: 8px;
        font-size: 12px;
        color: #fe3b30;
      }
    }
  }
  .group-selected {
    float: left;
    font-size: 14px;
    color: #303133;
  }
  .modal-form {
    input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: solid 1px #ddd;
      padding: 0 10px;
      border-radius: 3px;
    }
  }
</style>

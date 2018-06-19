<template>
  <div class="container">
    <h2>{{count}}</h2>
    <i-button @click="goNext">跳转下一页</i-button>
    <i-tab-bar :current=current color="#f759ab" @change="handleChange" style="width: 100%">
      <i-tab-bar-item key="homepage" icon="homepage" current-icon="homepage_fill" title="首页"></i-tab-bar-item>
      <i-tab-bar-item key="group" icon="group" current-icon="group_fill" title="朋友"></i-tab-bar-item>
      <i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="通知"></i-tab-bar-item>
      <i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
    </i-tab-bar>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        current: "mine",
        userInfo: {}
      };
    },

    computed: {
      ...mapState('counter', {
        count: state => state.num
      }),
    },

    methods: {
      goNext() {
        wx.navigateTo({
          url: "/pages/counter/index"
        });
      },
      handleChange(e) {
        const { detail } = e.mp;
        this.current = detail.key;
      }
    },

    created() {
    }
  };
</script>

<style type="text/less" lang="less" scoped>
  .container {
    .userinfo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .userinfo-avatar {
      width: 128 rpx;
      height: 128 rpx;
      margin: 20 rpx;
      border-radius: 50%;
    }

    .userinfo-nickname {
      color: #aaa;
    }

    .usermotto {
      margin-top: 150px;
    }

    .form-control {
      display: block;
      padding: 0 12px;
      margin-bottom: 5px;
      border: 1px solid #ccc;
    }

    .counter {
      display: inline-block;
      margin: 10px auto;
      padding: 5px 10px;
      color: blue;
      border: 1px solid blue;
    }
  }

</style>

<template>
  <el-container class="container">
    <el-aside :width="isCollapse?'64px':'200px'" class="aside">
      <div class="logo" :class="{close:isCollapse}"></div>
      <el-menu
        router
        default-active="/"
        class="el-menu-vertical-demo"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
        style="border-right:none"
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-s-order"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-s-comment"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管路</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-s-custom"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <i class="el-icon-s-fold" @click="toggleMenu"></i>
        <span class="txt">江苏传智播客教育有限公司</span>
        <el-dropdown style="float:right">
          <span class="el-dropdown-link">
            <img :src="avatar" alt />
            <b>{{name}}</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="setting()">
              <i class="el-icon-s-custom"></i>个人设置
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout()">
              <i class="el-icon-switch-button"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      avatar: '',
      name: ''
    }
  },
  created () {
    // 获取用户信息
    const user = JSON.parse(window.sessionStorage.getItem('bhhl'))
    this.avatar = user.photo
    this.name = user.name
  },
  methods: {
    // 退出登录
    logout () {
      window.sessionStorage.removeItem('bhhl')
      this.$router.push('/login')
    },
    // 跳转个人设置页
    setting () {
      this.$router.push('/setting')
    },
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less">
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .aside {
    background: #002233;
    .logo {
      height: 60px;
      background: #002840 url("../../assets/images/logo_admin.png") no-repeat
        center;
    }
    .close {
      background: url("../../assets/images/logo_admin_01.png") no-repeat center;
    }
  }
  .header {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      font-size: 24px;
      vertical-align: middle;
    }
    .txt {
      vertical-align: middle;
    }
    .el-dropdown-link img {
      height: 30px;
      vertical-align: middle;
    }
  }
}
</style>

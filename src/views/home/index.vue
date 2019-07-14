<template>
  <el-container class="container">
    <el-aside :width="isCollapse?'64px':'200px'" class="aside">
      <div class="logo" :class="{close:isCollapse}"></div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#002233"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
        style="border-right:none"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-order"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-comment"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管路</span>
        </el-menu-item>
        <el-menu-item index="7">
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
            <img src="../../assets/images/avatar.jpg" alt />
            <b>黑马小妹</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-s-custom"></i>个人设置
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-switch-button"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main"></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
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
      background: url("../../assets/images/logo_admin_01.png") no-repeat
        center;
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
  main {
    background: url("../../assets/images/welcome.jpg") no-repeat center;
  }
}
</style>

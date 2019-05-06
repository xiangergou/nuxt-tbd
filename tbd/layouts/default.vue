<template>
  <div>
    <header class="home__nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo"   mode="horizontal" @select="handleSelect">
        <el-menu-item style="padding-left:0">
          <nuxt-link to="/" class="navbar-logo">
            <img src="~assets/images/logo.svg">
          </nuxt-link>
          <nuxt-link to="/" class="navbar-logo">
            <img src="~assets/images/logo-word.png" 
            style="height: 40px;width: 120px;margin-left: 10px">
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2" >榜单</el-menu-item>
        <el-menu-item index="3" >内容电商</el-menu-item>
        <el-menu-item style="float: right">
          <el-input placeholder="请输入关键词搜索" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-menu-item>
      </el-menu>
  </header>
  <nuxt />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        input3: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({
              path: '/'
            })
            break;
          case '2':
            this.$router.push({
              path: '/navi'
            })
            break;
        }
      }
    }
  }
</script>

<style lang="scss">
.home__nav{
  overflow: auto;
  background: #f7f7f7;
  .el-menu{
    border: none !important;
    margin: 0 auto;
    height: 60px;
    width: 1180px;
    background: #fafafa;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    color: #ff502e !important;
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    cursor: pointer;
  }

  .el-input-group__append button.el-button{
    padding: 12px;
  }
}
</style>
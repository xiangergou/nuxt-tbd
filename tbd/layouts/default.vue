<template>
  <div>
    <header class="home__nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo"   mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2" >榜单</el-menu-item>
        <el-menu-item index="3" >内容电商</el-menu-item>
        <el-menu-item style="float: right">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
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
        console.log(key);
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
  background: #fafafa;
  .el-menu{
    border: none !important;
    margin: 0 auto;
    height: 60px;
    width: 1180px;
    background: #fafafa;
  }
}
</style>
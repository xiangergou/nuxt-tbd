<template>
  <section class="navi-container">
    <header class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#FB5E42"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">达人榜</el-menu-item>
        <el-menu-item index="2">商家榜</el-menu-item>
        <el-menu-item index="3">机构榜</el-menu-item>
        <el-menu-item index="4">特色榜</el-menu-item>
        <el-menu-item index="5">天猫金婴榜</el-menu-item>
        <el-menu-item index="6">天猫金妆榜</el-menu-item>
      </el-menu>
    </header>
    <component v-bind:is="currentTabComponent" :labelName="activeIndex"></component>
  </section>
</template>
<script>
  import people from '~/components/navi/list-people'
  export default {
    components: {
      people,
    },
    data() {
      return {
        activeIndex: '1',
        currentTabComponent: people
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key
      }
    }
  }
</script>

<style lang="scss">
.navi-container{
  .nav{
    width: 100%;
    background: #FB5E42;
    .el-menu{
      width: 1180px;
      margin: 0 auto;
      height: 46px;
      .el-menu-item{
        height: 46px;
        line-height: 46px;
        border-width: 3px;
      }
    }
  }
}
</style>
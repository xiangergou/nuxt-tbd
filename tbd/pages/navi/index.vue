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
    <component
      v-bind:is="currentTabComponent"
      :labelName="activeIndex"
      :timeList="timeList"></component>
  </section>
</template>
<script>
  import list from './components/list.vue'
  import { listApi } from '~/api/latestlist.js';

  export default {
    components: {
      list,
    },
    data() {
      return {
        activeIndex: '1',
        currentTabComponent: list
      };
    },
    async asyncData() {
      // console.log(await listApi.getAreas(), 'await listApi.getBanners()')
      // const bannerList = await listApi.getBanners();
      const time = await listApi.getPublishdetail();
      return {
        timeList: time.data.data
        // banners: bannerList.data.data
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key
      },
      getAreas () {
        listApi.getAreas().then(res => {
          console.log(res.data.data, 'res')
        })
      },
      getDaren() {
        // listApi.getDaren().then(res => {
        //   console.log(res.data.data, 'res')
        // })
      },
      init () {
        // listApi.getAreas().then(res => console.log(res, 'getAreas'))
        listApi.getDirs().then(res => console.log(res.data, 'getDirs'))
        listApi.getBydir().then(res => console.log(res.data, 'getBydir'))
        listApi.getTopdirs().then(res => console.log(res.data, 'getTopdirs'))
        listApi.getPublishdetail().then(res => console.log(res.data, 'getPublishdetail'))
        listApi.getPageQuery().then(res => console.log(res.data, 'getPageQuery'))
        listApi.getPageCount().then(res => console.log(res.data, 'getPageCount'))
      }
    },
    mounted () {
      this.init();
    },
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
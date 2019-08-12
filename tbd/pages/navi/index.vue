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
        <el-menu-item :index="''+ (i + 1)" v-for="(item, i) in navList.slice(1)" :key="i">{{item.oneName}}</el-menu-item>
        <el-menu-item index="7" style="float:right" >{{navList && navList[0].oneName}}</el-menu-item>
      </el-menu>
    </header>
    <component
      v-bind:is="currentTabComponent"
      :labelName="activeIndex"
      :descContent="descContent"
      :tableData="tableData"
      :timeList="timeList"></component>
  </section>
</template>
<script>
  import list from './components/list.vue'
  import { listApi } from '~/api/latestlist.js';
  import { homeApi } from '~/api/home.js'

  export default {
    components: {
      list,
    },
    data() {
      return {
        activeIndex: '1',
        currentTabComponent: list,
        navList: '',
        tableData: []
      };
    },
    computed: {
      descContent() {
        return this.navList[this.activeIndex * 1] && this.navList[this.activeIndex * 1].descContent
      }
    },
    async asyncData() {
      // console.log(await listApi.getAreas(), 'await listApi.getBanners()')
      // const bannerList = await listApi.getBanners();
      const time = await listApi.getPublishdetail();
      // const tableData = await homeApi.getListdareninfo({darens: hostDarens.toString()});
      return {
        // tableData: tableData.data.data,
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
      async init () {
        // listApi.getAreas().then(res => console.log(res, 'getAreas'))
        
        const res = await listApi.getBydir();
        let arr = [];
        const hash = {};
        arr = res.data.data.reduce((pre, next) => {
          hash[next.one] ? '' : hash[next.one] = true && pre.push(next);
          return pre
        }, [])
        let idsArr = arr.map(item => item.one)

        const getDirs = await listApi.getDirs();
        const getDirsArr = getDirs.data.data.filter(item => {
          return item.level === 1 && idsArr.includes(item.dir)
        })
        // console.log(this.navList, 'getDirs')
        let newArr = [];
        arr.forEach((item, i) => {
          getDirsArr.forEach((k, v) => {
            if (item.oneName === k.name) {
              newArr.push(item)
            }
          })
        });
        this.navList = newArr;
        console.log(this.navList[1], 'this.navList')

        const list = await listApi.getPageQuery({id: this.navList[1].id, count: this.navList[1].latestPublishCount,page: 1, pageSize: 100})
        console.log(list.data.data.contents, 'list')
        this.tableData = list.data.data.contents;

        // 获取达人信息
        let darens = this.tableData.map(item => item['达人信息']).toString();
        const dareninfo = await listApi.getListdareninfo({darens});

        this.tableData = this.tableData.map(item => {
          return item = {...item, ...dareninfo.data.data[item['达人信息']]}
        })
      },
      // async getData(pageSize) {
      //   const list = await listApi.getPageQuery({id: this.navList[1].id, count: this.navList[1].latestPublishCount,  pageSize: pageSize, page: 1})
      //   this.tableData = list.data.data.contents;

      //   let darens = this.tableData.map(item => item['达人信息']).toString();
      //   const dareninfo = await listApi.getListdareninfo({darens});

      //   this.tableData = this.tableData.map(item => {
      //     return item = {...item, ...dareninfo.data.data[item['达人信息']]}
      //   })
      // }
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
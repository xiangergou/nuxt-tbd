<template>
  <div class="home_container" id="home_container">
    <!-- banner -->
    <banner
      :banners="banners"
      :ranklistCount="ranklistCount"
      :taoHot="taoHot">
    </banner>
    <!-- 最新排行 -->
    <ranking
      :tableData="tableData"
      :list="list"
      :ranklists="ranklists"
      :activities="activities">
    </ranking>
    <!-- 内容电商 -->
    <contents
      :leftData="leftData"
      :rightData="rightData"
    >
    </contents>
    <!-- 广告 -->
    <section class="home__article-img" v-for="(item, i) in adv" :key="i">
      <a :href="item.link">
        <img :src="item.icon" alt="">
      </a>
    </section>
    <!-- 报文 -->
    <articles
      :pageQuerylist="pageQuerylist">
    </articles>
    <!-- link -->
    <links
    :listlinks="listlinks">
    </links>
    <footer>
      <span style="color: #90BEF9">浙江天下网商网络传媒有限公司</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;未经许可不得转载&nbsp;&nbsp;|&nbsp;&nbsp;浙ICP备11003104号-2&nbsp;&nbsp;|&nbsp;&nbsp;互联网出版许可证：新出网证（浙）字39号</span>
    </footer>
 
  </div>
  </template>
<script>
import { homeApi } from '~/api/home.js';
import { listApi } from '~/api/latestlist.js';

import { sliceArray } from '~/utils/tool.js';
import banner from './components/banner.vue'
import ranking from './components/ranking.vue'
import contents from './components/contents.vue'
import articles from './components/article'
import links from './components/links'

export default {
  name: 'home',
  components: {
    banner,
    ranking,
    contents,
    articles,
    links
  },
  serverCacheKey () {
    // Will change every 10 secondes
    return Math.floor(Date.now() / 10000)
  },
  async asyncData() {
    const pageList = await homeApi.getPageQuery();
    const pageQuerylist = sliceArray(pageList.data.data.items, 8);
    const linkList = await homeApi.getListlinks();
    const advList = await homeApi.getListMainAdv();

    // 最新排行
    const articleList = await homeApi.getRanklists();
    const articleData = articleList.data.data;
    const hostObj = await listApi.getPageQuery({
      count: articleData[0].latestPublishCount,
      id: articleData[0].listId,
    });
    const videoObj = await listApi.getPageQuery({
      count: articleData[1].latestPublishCount,
      id: articleData[1].listId,
    });
    articleData[0] = {...articleData[0], ...hostObj.data.data}
    articleData[1] = {...articleData[1], ...videoObj.data.data}
    const hostDarens = hostObj.data.data.contents.map(item => item['达人信息']).toString();
    const videoDarens = videoObj.data.data.contents.map(item => item['达人信息'])
    const hostTableData = await homeApi.getListdareninfo({darens: hostDarens.toString()});
    const videoTableData = await homeApi.getListdareninfo({darens: videoDarens.toString()})

    const taoHotList = await homeApi.getTaoHot();
    const taoHot = sliceArray(taoHotList.data.data, 3);
    const rankList = await homeApi.getRanklistsummation();
    const bannerList = await homeApi.getBanners();

    // 榜单解读 
    const activities = await homeApi.getCategoryArticles({categoryId: 2, number: 9})

    // 内容电商
    const leftData = await homeApi.getCategoryArticles({categoryId: 3, number: 6})
    const rightData = await homeApi.getCategoryArticles({categoryId: 1, number: 4})
    // const 
    return {
      leftData: leftData.data.data,
      rightData: rightData.data.data,
      activities: activities.data.data,
      tableData: {...hostTableData.data.data, ...videoTableData.data.data},
      list: [hostObj.data.data, videoObj.data.data],
      pageQuerylist,
      listlinks: linkList.data.data,
      adv: advList.data.data,
      ranklists: articleData,
      taoHot,
      ranklistCount: rankList.data.data,
      banners: bannerList.data.data
    };
  },
  data() {
    return {
      ranklists: [], // 排行列表
      ranklistCount: {}, // 榜单统计
      adv: {}, // 广告
      listlinks: [], // 友情链接
      taoHot: [],
      pageQuerylist: [], // 爆文列表
      active: false,
      banners: [],
      // articles: [],
      // activities: [{
      //   content: '活动按期开始',
      //   timestamp: '2018-04-15'
      // }, {
      //   content: '通过审核',
      //   timestamp: '2018-04-13'
      // }, {
      //   content: '创建成功',
      //   timestamp: '2018-04-11'
      // }]
    }
  },
  methods: {
    getListAssistant() {
      homeApi.getListAssistant().then(res => {
        console.log(res.data.data, 'ListAssistant')
      })
    }
  },
  async mounted () {
    // const arr = await listApi.getPageQuery();
  }
}
</script>

<style lang="scss">
.home_container{
  overflow: auto;
  
  footer{
    height: 68px;
    width: 100%;
    text-align: center;
    line-height: 68px;
    font-family: SourceHanSansCN-Medium;
    font-size: 12px;
    color: #9d9e9e;
    background: #3c3e40;
  }
}

</style>

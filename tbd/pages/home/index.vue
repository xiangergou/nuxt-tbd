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
      :ranklists="ranklists"
      :activities="activities">
    </ranking>
    <!-- 内容电商 -->
    <contents>
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
    const articleList = await homeApi.getCategoryArticles();
    const taoHotList = await homeApi.getTaoHot();
    const taoHot = sliceArray(taoHotList.data.data, 3);
    const rankList = await homeApi.getRanklistsummation();
    const bannerList = await homeApi.getBanners();
    return {
      pageQuerylist,
      listlinks: linkList.data.data,
      adv: advList.data.data,
      ranklists: articleList.data.data,
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
      articles: [],
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }]
    }
  },
  methods: {
    getListAssistant() {
      homeApi.getListAssistant().then(res => {
        console.log(res.data.data, 'ListAssistant')
      })
    },
    init () {
      // this.getBanners()
      Promise.all([this.getListAssistant()])
    }
  },
  async mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
.home_container{
  overflow: auto;
  .home__banner{
    position: relative;
    overflow: auto;
    .el-carousel {
      .el-carousel__container{
        height: 380px !important;
      }
    }
    .home__banner-content{
      position: absolute;
      width: 484px;
      height: 306px;
      top: 35px;
      left: 50%;
      z-index: 9;
      transform: translateX(-590px);
      box-sizing: border-box;
      .box-card{
        background: rgba(0,0,0,.5);
        border-radius: 4px;
        color: #fff;
        border: none;
        padding: 0 20px;
        box-sizing: border-box;
        .el-card__body{
          padding: 0;
        }
        .title{
          height: 51px;
          border-bottom: 1px solid rgba(191,191,191,.3);
          line-height:51px;
          padding:0
        }
        .content{
          height:114px;
          display:flex;
          align-items:center;
          a{
            color:#fff;
            text-decoration: none;
          }
          .el-col{
            border-right:1px solid #Ccc;
            text-align:center;
            img{
              height:38px;
              width:auto;
              margin-bottom: 4px;
            }
          }
          .el-col:last-child{
            border:none;
          }
        }
      }
      .article-card{
        padding-top: 20px;
        box-sizing: border-box;
      }
    }
    .swiper-slide{
      span{
        cursor: pointer;
        font-family: SourceHanSansCN-Regular;
        font-size: 13px;
        color: #fff;
        display: block;
        margin-bottom: 10px;
        box-sizing: border-box;
        height: 28px;
        line-height: 18px;
      }
    }
  }
 .home__article-ranking{
    width: 1180px;
    overflow: auto;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background: #fafafa;
    .box-card {
      width: 100%;
      box-sizing: border-box;
      height: 476px;
      overflow: auto;
      .card-title{
        height: 40px;
        line-height: 40px;
        margin: 0;
        width: 100%;
        strong{
          margin: 0;
          border-left: 3px solid #ff502e;
          padding-left: 6px;
          font-weight: 600;
        }
        span{
          padding-right: 10px;
          font-family: SourceHanSansCN-Regular;
          font-size: 12px;
          color: #666;
          margin-top: 0;
        }
      }
      .card-table__title{
        margin: 10px;
        padding: 10px 0;
        text-align: left;
        border-bottom: 1px solid #ccc;
      }
      .card-table__body{
        margin: 10px;
        padding: 10px 0;
      }
    }
    .card-news{
      .el-card__body{
        padding: 15px 0 0 20px;
        background: #fff;
        box-sizing: border-box;
      }
    }
    .text {
      font-size: 14px;
    }
    .item {
      padding: 18px 0;
    }
  }
  .ranking_title{
    margin: 30px 0;
    box-sizing: border-box;
    h2{
      font-family: SourceHanSansCN-Regular;
      font-size: 24px;
      display: inline-block;
      color: #333;
      letter-spacing: 1px;
    }
    span{
      margin-top: 10px;
      font-family: SourceHanSansCN-Regular;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      float: right;
    }
  }
  .home__article-content{
    width: 1180px;
    overflow: auto;
    margin: 0px auto 10px;
    padding: 0;
    box-sizing: border-box;
    background: #fafafa;
    .article-content-left__section{
      padding-left: 10px;
      // padding-top: 10px;
      height: 96px;
      border-bottom: 1px solid #eee;
      p{
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #333;
        line-height: 20px;
        text-overflow: ellipsis;
        height: 20px;
        width: 100%;
        overflow: hidden;
      }
      span{
        display: block;
        margin-top: 9px;
        font-family: MicrosoftYaHei;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #999;
        text-overflow: ellipsis;
      }
      .setion-body{
        // border-bottom: 1px solid #ccc;
        margin: 14px 0;
      }
      .section-tags{
        height: 18px;
        line-height: 18px;
        margin-top: 13px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #656565;
      }
    }
    .el-card__body{
      box-sizing: border-box;
    }
    .content-article{
      padding: 19px;
      height: 80px;
      box-sizing: border-box;
      cursor: pointer;
      h3{
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span{
        margin-top: 6px;
        height: 16px;
        line-height: 16px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #999;
      }
    }
    .content-img{
      position: relative;
      // width: 320px;
      height: 180px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
      span{
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30px;
        line-height: 25px;
        padding-left: 10px;
        box-sizing: border-box;
        font-family: MicrosoftYaHei;
        font-size: 13px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: linear-gradient(transparent, 30%, rgba(0,0,0,0.5));
      }
    }
  }
  .home__article-img{
    width: 1180px;
    margin: 30px auto 0;
    padding: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .home__article-list{
    width: 1180px;
    overflow: auto;
    margin: 0 auto;
    .el-carousel {
      .el-carousel__container{
        height: 430px !important;
      }
    }
    .article-list-card{
      h3{
        height: 48px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #333;
        line-height: 24px;
        margin-top: 17px;
        overflow: hidden;
      }
      p{
        height: 36px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #999;
        line-height: 18px;
        margin-top: 16px;
        overflow: hidden;
      }
      .list-card__row{
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #656565;
        line-height: 18px;
        margin-top: 23px;
        height: 18px;
      }
    }
  }
  .home__article-link{
    width: 100%;
    background: #949494;
    .content{
      width: 1180px;
      padding: 26px 0;
      height: 162px;
      margin: 0 auto;
      box-sizing: border-box;
      h3{
        color: #FFF;
        font-size: 18px;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
      a{
        text-decoration: none;
        color: #fff;
      }
      ul{
        list-style: none;
        li{
          font-size: 12px;
          text-decoration:none;
          color: #fff;
          display: inline-block;
          margin-right: 50px;
          box-sizing: border-box;
        }
      }
      .content-left{
        float: left;
      }
      .content-right{
        float: right;
        width: 180px;
        ol{
          display: flex;
          li{
            flex: 1;
            text-align: center;
          }
        }
        img{
          width: 45px;
          height: 45px;
        }
        span{
          display: block;
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
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
 
  .home-active__btn{
    background:#ff502e;
    color:#656565;
    border:none;
    .btn-more{
      margin-top:-3px;
      margin-right:-3px;
      font-weight: 400;
      p{
        letter-spacing: 4px;
      }
    }
  }
}

</style>

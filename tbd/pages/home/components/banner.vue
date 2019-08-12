<template>
 <section class="home__banner">
  <article class="home__banner-content">
    <el-card class="box-card">
      <el-row class="title">
        <span style="float:left; font-size:18px;">榜单</span>
        <span style="float:right; font-size:14px;">淘榜单 第 
          <i style="font-size:18px;">{{ranklistCount.current}}</i> 期   累计发布 <i style="font-size:18px;">{{ranklistCount.total}}</i> 个榜单</span>
      </el-row>
      <el-row :gutter="10" class="content">
        <el-col :span="6" v-for="(item, i) in subtitle" :key="i">
          <a :href="item.src">
            <img :src="item.icon" >
            <p style="font-size: 14px; margin-top: 4px;">{{item.title}}</p>
          </a>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card article-card" style="margin-top:10px;">
      <h4 style="margin-bottom:10px;font-size:18px">文章</h4>
        <div v-swiper:swiper="swiperOption" ref="swiperBox"         style="overflow: hidden; height: 104px;" >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, i) in taoHot" :key="i">
              <ul style="list-style:disc inside;">
                <li style="height:104 px; padding:0" v-for="(j, k) in item" :key="k">
                <a :href="j.link">{{j.title}}</a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </el-card>
  </article>
  <el-carousel :interval="5000" arrow="hover">
    <el-carousel-item v-for="(item, i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.icon" alt="" style="width:100%;height: 100%">
      </a>
    </el-carousel-item> 
  </el-carousel>
</section>
</template>

<script>
  const daren = require('~/assets/images/homepage-daren.svg')
  const business = require('~/assets/images/homepage-business.svg')
  const ori = require('~/assets/images/homepage-ori.svg')
  const characteristic = require('~/assets/images/homepage-characteristic.svg')

  export default {
    name: 'banner',
    serverCacheKey () {
      return Math.floor(Date.now() / 10000)
    },
    data() {
      return {
        swiperOption: {
          speed: 500,
          direction: 'vertical',
          slidesPerView: 1,
          autoplay: true
        },
        subtitle: [
          {icon: daren, src: '/navi/list?oneId=40&listId=0', title: '达人榜'},
          {icon: business, src: '/navi/list?oneId=42&listId=0', title: '商家榜'},
          {icon: ori, src: '/navi/list?oneId=41&listId=0', title: '机构榜'},
          {icon: characteristic, src: '/navi/list?oneId=43&listId=0', title: '特色榜'},
        ]
      }
    },
    props: {
      banners: {
        type: Array,
        default: () => []
      },
      ranklistCount: {
        type: Object,
        default: () => {}
      },
      taoHot: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style lang=scss>
.home__banner{
  background: #FB5E42;
  position: relative;
  overflow: auto;
  .el-carousel {
    .el-carousel__container{
      height: 380px !important;
      button{
        width: 40px;
        height: 66px;
        line-height: 66px;
      }
    }
    .el-carousel__arrow i{
      font-size: 28px;
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
        // height: 51px;
        border-bottom: 1px solid rgba(191,191,191,.3);
        line-height:51px;
        padding:0;
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
      padding: 10px 20px 0;
      box-sizing: border-box;
    }
  }
  .swiper-slide{
    li{
      cursor: pointer;
      font-family: SourceHanSansCN-Regular;
      font-size: 13px;
      color: #fff;
      margin-bottom: 10px;
      box-sizing: border-box;
      height: 28px;
      line-height: 18px;
    }
  }
}
</style>
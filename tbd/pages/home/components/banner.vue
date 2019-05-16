<template>
<div>
 <section class="home__banner">
      <article class="home__banner-content">
        <el-card class="box-card">
          <el-row class="title">
            <span style="float:left">榜单</span>
            <span style="float:right">淘榜单 第 {{ranklistCount.current}} 期   累计发布 {{ranklistCount.total}} 个榜单</span>
          </el-row>
          <el-row :gutter="10" class="content">
            <el-col :span="6">
              <a href="">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" >
                <p>达人榜</p>
              </a>
            </el-col>
            <el-col :span="6">
              <a href="">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" >
                <p>达人榜</p>
              </a>
            </el-col>
            <el-col :span="6">
              <a href="">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" >
                <p>达人榜</p>
              </a>
            </el-col>
            <el-col :span="6">
              <a href="">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" >
                <p>达人榜</p>
              </a>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card article-card" style="margin-top:10px;">
          <h4 style="margin-bottom:10px">文章</h4>
            <div v-swiper:swiper="swiperOption" ref="swiperBox"         style="overflow: hidden; height: 104px;" >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in taoHot" :key="i">
                  <div style="height:104 px; padding:0" v-for="(j, k) in item" :key="k">
                    <a :href="j.link"><span><i>·</i>{{j.title}}</span></a>
                  </div>
                </div>
            </div>
          </div>
        </el-card>
      </article>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, i) in banners" :key="i">
          <img v-lazy="item.icon" alt="">
        </el-carousel-item> 
      </el-carousel>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'banner',
    serverCacheKey () {
      // Will change every 10 secondes
      return Math.floor(Date.now() / 10000)
    },
    data() {
      return {
        swiperOption: {
          speend: 300,
          direction: 'vertical',
          slidesPerView: 1,
          autoplay: true
        }
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

<style scoped>

</style>
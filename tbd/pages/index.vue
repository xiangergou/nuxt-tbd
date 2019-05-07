<template>
  <div class="home_container">
    <section class="home__banner">
      <article class="home__banner-content">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="3">榜单</el-col>
            <el-col :span="16" :offset="5">
              淘榜单 第 62 期   累计发布 1631 个榜单
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="6">榜单</el-col>
            <el-col :span="6">榜单</el-col>
            <el-col :span="6">榜单</el-col>
            <el-col :span="6">榜单</el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" style="margin-top:10px;">
          <h4>文章</h4>
        </el-card>
      </article>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, i) in banners" :key="i">
          <img v-lazy="item.icon" alt="">
        </el-carousel-item> 
      </el-carousel>
    </section>
    <!-- 最新排行 -->
    <section class="home__article-ranking">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="18" style="margin-right:20px">
            <div class="ranking_title">
              <h2>最新排行</h2>
              <span>更多</span>
            </div>
           <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12" style="margin-right:20px">
                <el-card class="box-card">
                  <div class="ranking_title card-title">
                    <strong>主播综合榜 ></strong>
                    <span>2019.4.15-2019.4.21</span>
                  </div>
                  <el-row justify="space-between" class="card-table__title">
                    <el-col :span="6">排名</el-col>
                    <el-col :span="8">昵称</el-col>
                    <el-col :span="10" style="text-align:right">淘指数</el-col>
                  </el-row>
                  <el-row justify="space-between" class="card-table__body">
                    <el-col :span="3">1</el-col>
                    <el-col :span="3">昵称</el-col>
                    <el-col :span="3" >昵称</el-col>
                    <el-col :span="15" style="text-align:right">淘指数</el-col>
                  </el-row> 
                  <el-row justify="space-between" class="card-table__body">
                    <el-col :span="3">1</el-col>
                    <el-col :span="3">昵称</el-col>
                    <el-col :span="3" >昵称</el-col>
                    <el-col :span="15" style="text-align:right">淘指数</el-col>
                  </el-row> 
                </el-card>
             </el-col>
             <el-col :span="12">
               <el-card class="box-card">
                 <div class="ranking_title card-title">
                    <strong>短视频排行榜 ></strong>
                    <span>2019.4.15-2019.4.21</span>
                  </div>
                  <el-row justify="space-between" class="card-table__title">
                    <el-col :span="6">排名</el-col>
                    <el-col :span="8">昵称</el-col>
                    <el-col :span="10" style="text-align:right">淘指数</el-col>
                  </el-row>
                  <el-row justify="space-between" class="card-table__body">
                    <el-col :span="3">1</el-col>
                    <el-col :span="3">昵称</el-col>
                    <el-col :span="3" >昵称</el-col>
                    <el-col :span="15" style="text-align:right">淘指数</el-col>
                  </el-row> 
                  <el-row justify="space-between" class="card-table__body">
                    <el-col :span="3">1</el-col>
                    <el-col :span="3">昵称</el-col>
                    <el-col :span="3" >昵称</el-col>
                    <el-col :span="15" style="text-align:right">淘指数</el-col>
                  </el-row> 
                </el-card>
             </el-col>
           </el-row>
        </el-col>
        <el-col :span="6">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card class="box-card card-news">
             <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{activity.content}}
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <!-- 内容电商 -->
    <section  class="home__article-content">
      <el-row justify="space-between" type="flex">
        <el-col :span="17" style="margin-right:20px;">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card :body-style="{ height: '420px' }">
            <el-row style="margin-bottom: 20px;">
              <el-col :span="10">
                <div class="content-img">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <span>直播不卖货？5个技巧帮你解决！</span>
                </div>
              </el-col>
              <el-col :span="14">
                <div style="border-bottom:1px solid #ccc;">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row>
                    <el-col :span="6">dsadsadsa</el-col>
                    <el-col :span="6">dsadsadsa</el-col>
                  </el-row>
                </div>
                <div style="border-bottom:1px solid #ccc;">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row>
                    <el-col :span="6">dsadsadsa</el-col>
                    <el-col :span="6">dsadsadsa</el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            
            <el-row>
              <el-col :span="10">
                <div class="content-img">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <span>直播不卖货？5个技巧帮你解决！</span>
                </div>
              </el-col>
              <el-col :span="14">
                <div style="border-bottom:1px solid #ccc;">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row>
                    <el-col :span="6">dsadsadsa</el-col>
                    <el-col :span="6">dsadsadsa</el-col>
                  </el-row>
                </div>
                <div style="border-bottom:1px solid #ccc;">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row>
                    <el-col :span="6">dsadsadsa</el-col>
                    <el-col :span="6">dsadsadsa</el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="7">
          <div class="ranking_title">
              <h2>最新排行</h2>
              <span>更多</span>
            </div>
          <el-card :body-style="{ padding: '0px', height: '420px'  }">
            <div class="content-img">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <span>直播不卖货？5个技巧帮你解决！</span>
            </div>
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="home__article-img">
      <img src="https://txws-tbd.oss-cn-qingdao.aliyuncs.com/image/20190218/20190218_6d9eb5dca9f742d6a7485b70961d0777.png" alt="">
    </section>
    <section class="home__article-list">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover">
                鼠标悬浮时显示
              </el-card>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="home__article-link">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="16">212121</el-col>
          <el-col :span="8">212121</el-col>
        </el-row>
      </div>
    </section>
    <footer>
      <span _ngcontent-c4="" style="color: #90BEF9">浙江天下网商网络传媒有限公司</span>
      <span _ngcontent-c4="">&nbsp;&nbsp;|&nbsp;&nbsp;未经许可不得转载&nbsp;&nbsp;|&nbsp;&nbsp;浙ICP备11003104号-2&nbsp;&nbsp;|&nbsp;&nbsp;互联网出版许可证：新出网证（浙）字39号</span>
    </footer>
    <div class="fixed">
      <div>
        顶部
      </div>
      <div>
        顶部
      </div>
      <div>
        顶部
      </div>
    </div>
  </div>
  </template>
<script>
import { homeApi } from '~/api/home.js';
export default {
  components: {
  },
  data() {
    return {
      banners: [],
      reverse: true,
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
    getBanner() {
      homeApi.getBanners().then(res => {
        this.banners = res.data.data;
      })
    }
  },
  mounted () {
    this.getBanner()
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
    overflow: auto;
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
    margin: 10px auto;
    padding: 0;
    box-sizing: border-box;
    background: #fafafa;
    .el-card__body{
      box-sizing: border-box;
    }
    .content-img{
      position: relative;
      width: 320px;
      height: 180px;
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
    overflow: auto;
    margin: 30px auto;
    padding: 0;
    img{
      width: 100%;
    }
  }
  .home__article-list{
    width: 1180px;
    overflow: auto;
    margin: 30px auto;
    padding: 0;
  }
  .home__article-link{
    width: 100%;
    background: #949494;
    overflow: auto;
    .content{
      width: 1180px;
      padding: 0;
      height: 162px;
      margin: 0 auto;
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
  .fixed{
    position: fixed;
    bottom: 70px;
    right: 50%;
    -webkit-transform: translateX(680px);
    -ms-transform: translateX(680px);
    transform: translateX(680px);
    width: 46px;
  }
}

</style>

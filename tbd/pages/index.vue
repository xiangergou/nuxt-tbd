<template>
  <div class="home_container" id="home_container">
    <section class="home__banner">
      <article class="home__banner-content">
        <el-card class="box-card">
          <el-row class="title">
            <span style="float:left">榜单</span>
            <span style="float:right">淘榜单 第 62 期   累计发布 1631 个榜单</span>
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
            <div  v-swiper:swiper="swiperOption" ref="swiperBox"  style="overflow: hidden; height: 104px;">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(banner,i) in banners" :key="i">
                  <span><i style="font-size: 10px;">• </i> dsa</span>
                  <span>• dsa</span>
                  <span>• dsa</span>
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
            <h2>内容电商</h2>
            <span>更多</span>
          </div>
          <el-card :body-style="{ height: '420px' }">
            <el-row style="margin-bottom: 20px;" class="article-content__left">
              <el-col :span="10">
                <div class="content-img">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <span>直播不卖货？5个技巧帮你解决！</span>
                </div>
              </el-col>
              <el-col :span="14" class="article-content-left__section">
                <div class="setion-body">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row class="section-tags">
                    <el-col :span="6">     岳遥  5小时前</el-col>
                    <el-col :span="6">     岳遥  5小时前</el-col>
                  </el-row>
                </div>
                <div class="setion-body">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row class="section-tags">
                    <el-col :span="6">岳遥  5小时前</el-col>
                    <el-col :span="6">岳遥  5小时前</el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin-bottom: 20px;" class="article-content__left">
              <el-col :span="10">
                <div class="content-img">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <span>直播不卖货？5个技巧帮你解决！</span>
                </div>
              </el-col>
              <el-col :span="14" class="article-content-left__section">
                <div class="setion-body">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row class="section-tags">
                    <el-col :span="6">     岳遥  5小时前</el-col>
                    <el-col :span="6">     岳遥  5小时前</el-col>
                  </el-row>
                </div>
                <div class="setion-body">
                  <p>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</p>
                  <span>一禅小和尚抖音粉丝将超4500w，优质形象IP如何吸粉？</span>
                  <el-row class="section-tags">
                    <el-col :span="6">岳遥  5小时前</el-col>
                    <el-col :span="6">岳遥  5小时前</el-col>
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
            <div class="content-article">
              <h3>腾讯上线短视频APP，支付宝小程序用户规模破亿｜小榜情报站 </h3>
              <span>小榜君  2019-4-26</span>
            </div>
            <div class="content-article">
              <h3>腾讯上线短视频APP，支付宝小程序用户规模破亿｜小榜情报站 </h3>
              <span>小榜君  2019-4-26</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="home__article-img">
      <img src="https://txws-tbd.oss-cn-qingdao.aliyuncs.com/image/20190218/20190218_6d9eb5dca9f742d6a7485b70961d0777.png" alt="">
    </section>
    <!-- 报文 -->
    <section class="home__article-list">
      <div class="ranking_title" style="margin-bottom:14px">
        <h2>这就是爆文</h2>
      </div>
      <el-carousel indicator-position="outside" arrow="never">
        <el-carousel-item v-for="item in 2" :key="item">
          <div>
            <el-row :gutter="10">
              <el-col :span="6">
                <el-card shadow="hover" class="article-list-card">
                  <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                  <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                  <el-row class="list-card__row">
                    <el-col :span="12" style="text-align:left">
                      极客时间
                    </el-col>
                    <el-col :span="12"  style="text-align:right">
                      阅读量：212w
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="hover" class="article-list-card">
                  <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                  <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                  <el-row class="list-card__row">
                    <el-col :span="12" style="text-align:left">
                      极客时间
                    </el-col>
                    <el-col :span="12"  style="text-align:right">
                      阅读量：212w
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="hover" class="article-list-card">
                  <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                  <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                  <el-row class="list-card__row">
                    <el-col :span="12" style="text-align:left">
                      极客时间
                    </el-col>
                    <el-col :span="12"  style="text-align:right">
                      阅读量：212w
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="hover" class="article-list-card">
                  <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                  <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                  <el-row class="list-card__row">
                    <el-col :span="12" style="text-align:left">
                      极客时间
                    </el-col>
                    <el-col :span="12"  style="text-align:right">
                      阅读量：212w
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          <br/>
          <el-row :gutter="10">
            <el-col :span="6">
              <el-card shadow="hover" class="article-list-card">
                <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                <el-row class="list-card__row">
                  <el-col :span="12" style="text-align:left">
                    极客时间
                  </el-col>
                  <el-col :span="12"  style="text-align:right">
                    阅读量：212w
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="article-list-card">
                <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                <el-row class="list-card__row">
                  <el-col :span="12" style="text-align:left">
                    极客时间
                  </el-col>
                  <el-col :span="12"  style="text-align:right">
                    阅读量：212w
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="article-list-card">
                <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                <el-row class="list-card__row">
                  <el-col :span="12" style="text-align:left">
                    极客时间
                  </el-col>
                  <el-col :span="12"  style="text-align:right">
                    阅读量：212w
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card shadow="hover" class="article-list-card">
                <h3>超级夺人眼球，红唇中演绎万重风情！</h3>
                <p>滋润，够红，雾面的我很喜欢，价格实惠，真心不错。口红有种淡淡的清香，颜色也很好看，超级夺人眼球，红唇中演绎万重风情！</p>
                <el-row class="list-card__row">
                  <el-col :span="12" style="text-align:left">
                    极客时间
                  </el-col>
                  <el-col :span="12"  style="text-align:right">
                    阅读量：212w
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="home__article-link">
      <div class="content">
        <div class="content-left">
          <h3>友情链接</h3>
          <ul>
            <li>天下网商</li>
            <li>天下网商</li>
            <li>天下网商</li>
            <li>天下网商</li>
          </ul>
        </div>
        <div class="content-right">
            <h3>友情链接</h3>
            <ul>
              <li>
                <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""
                style="width: 100px; height: 100px">
                <p>肖邦微信号</p>
              </li>
              <li>
                <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""
                style="width: 100px; height: 100px">
                <p>微信公众号</p>
              </li>
            </ul>
        </div>
      </div>
    </section>
    <footer>
      <span _ngcontent-c4="" style="color: #90BEF9">浙江天下网商网络传媒有限公司</span>
      <span _ngcontent-c4="">&nbsp;&nbsp;|&nbsp;&nbsp;未经许可不得转载&nbsp;&nbsp;|&nbsp;&nbsp;浙ICP备11003104号-2&nbsp;&nbsp;|&nbsp;&nbsp;互联网出版许可证：新出网证（浙）字39号</span>
    </footer>
 
  </div>
  </template>
<script>
import { homeApi } from '~/api/home.js';
import Vue from 'vue'

export default {
  components: {
    // Swiper
  },
  data() {
    return {
      imgs: [
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      ],
      swiperOption: {
        speend: 300,
        direction: 'vertical',
        slidesPerView: 1,
        autoplay: true
      },
      active: false,
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
    margin: 10px auto;
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
    overflow: auto;
    margin: 30px auto 0;
    padding: 0;
    img{
      width: 100%;
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
    overflow: auto;
    .content{
      width: 1180px;
      padding: 26px 0;
      height: 162px;
      margin: 0 auto;
      h3{
        font-size: 18px;
        margin-bottom: 10px;
      }
      ul{
        list-style: none;
        li{
          text-decoration:none;
          color: #fff;
          display: inline-block;
        }
      }
      .content-left{
        float: left;
      }
      .content-right{
        float: right;
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

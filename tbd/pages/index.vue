<template>
  <div class="home_container">
    <section class="home__banner">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item> 
      </el-carousel>
    </section>
    <section class="home__article-ranking">
      <el-row type="flex" class="row-bg" justify="space-around" :gutter="10">
        <el-col  style="width:410px;">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col  style="width:410px;">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col style="width:320px;">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <!-- 内容电商 -->
    <section  class="home__article-content">

      <el-row :gutter="20">
        <el-col :span="17">
          <div class="ranking_title">
            <h2>最新排行</h2>
            <span>更多</span>
          </div>
          <el-card :body-style="{ padding: '18px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;display:inline-block;">
              <span>好吃的汉堡</span>
              <div class="clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <div class="ranking_title">
              <h2>最新排行</h2>
              <span>更多</span>
            </div>
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
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

export default {
  components: {
  }
}
</script>

<style lang="scss">
.home_container{
  overflow: auto;
  .home__banner{
    overflow: auto;
    .el-carousel {
      .el-carousel__container{
        height: 380px !important;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 380px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
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
    }
    .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }
    .ranking_title{
      box-sizing: border-box;
      overflow: auto;
      h2{
        float: left;
        // display: inline-block;
      }
      span{
        float: right;
        margin-top: 25px;
      }
    }
  }
  .home__article-content{
    width: 1180px;
    overflow: auto;
    margin: 10px auto;
    padding: 0;
    box-sizing: border-box;
    background: #fafafa;
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




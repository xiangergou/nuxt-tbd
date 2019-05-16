<template>
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
</template>

<script>
  export default {
    name: 'contents',
    serverCacheKey () {
      // Will change every 10 secondes
      return Math.floor(Date.now() / 10000)
    },
    props: {
      propName: {
        type: Number,
        default: () => 1
      }
    },
  }
</script>

<style scoped>

</style>
<template>
    <section class="home__article-ranking">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="18" style="margin-right:20px">
            <div class="ranking_title">
              <h2>最新排行</h2>
              <span>
                <a href="" style="color: #000">更多 ></a>
              </span>
            </div>
           <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12" v-for="(item, i) in ranklists" :key="i" class="content-list">
                <el-card class="box-card">
                  <div class="ranking_title card-title">
                    <strong>{{item.name}} ></strong>
                    <span>2019.4.15-2019.4.21</span>
                  </div>
                  <el-row justify="space-between" class="card-table__title">
                    <el-col :span="6">排名</el-col>
                    <el-col :span="8">{{item.fields[0]}}</el-col>
                    <el-col :span="10" style="text-align:right">{{item.fields[1]}}</el-col>
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
</template>

<script>
  export default {
    name: 'ranking',
    serverCacheKey () {
      // Will change every 10 secondes
      return Math.floor(Date.now() / 10000)
    },
    data() {
      return {
        reverse: true
      }
    },
    mounted() {
      console.log(this.ranklists, 'ranklists')
    },
    props: {
      ranklists: {
        type: Array,
        default: () => []
      },
      activities:{
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
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
  .content-list:first-child{
    margin-right: 20px;
  }
  .ranking_title{
    margin: 24px 0;
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
</style>
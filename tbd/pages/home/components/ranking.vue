<template>
    <section class="home__article-ranking">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="18" style="margin-right:20px">
            <div class="ranking_title">
              <h2>最新排行</h2>
              <span>更多</span>
            </div>
           <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="12" style="margin-right:20px"  v-for="(item, i) in ranklists" :key="i">
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

<style scoped>

</style>
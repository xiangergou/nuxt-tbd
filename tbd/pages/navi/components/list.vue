<template>
  <div class="list-container">
    
    <el-card class="box-card">
      <div style="margin-bottom:10px;">
        <span>类型:</span>
        <ul>
          <li>直播</li>
          <li>短视频</li>
        </ul>
      </div>
      <div>
        <span>类型:</span>
        <ul>
          <li>美搭</li>
          <li>美妆</li>
          <li>居家</li>
          <li>美食</li>
          <li>母婴</li>
          <li>数码科技</li>
          <li>园艺</li>
          <li>活动</li>
        </ul>
      </div>
    </el-card>
    <el-card class="box-card">
      <div>
        <el-select v-model="value" placeholder="请选择"
          size="small">
          <el-option
            v-for="item in setOptions(timeList)"
            :key="item.key"
            :label="item.key"
            :value="item.count">
          </el-option>
        </el-select>
        <span style="float:right">榜单说明</span>
      </div>
      <el-row justify="space-between" class="card-table__title">
        <el-col :span="2" v-for="(item, i) in descContent" :key="i">
          {{item.key}}
        </el-col>
       
      </el-row>
      <el-row justify="space-between" class="card-table__body" v-for="(item, i) in tableData" :key="i">
        <el-col :span="2">{{item['序号']}}</el-col>
        <el-col :span="2" class="avater">
          <img :src="`http://${item.darenUrl && item.darenUrl.slice(2)}`" alt="">
        </el-col>
        <el-col :span="2">
          {{item['nick']}}
          <p>{{item['area']}}</p>
        </el-col>
        <el-col :span="2" style="text:center">
          <el-popover
            placement="top"
            width="100"
            trigger="hover">
            <img :src="item['wirelessQr']" alt="" style="width:80px;height:80px;">
            <p>用手机淘宝扫码查看</p>
            <span slot="reference" style="width:18px;height:18px;">
              <img :src="item['wirelessQr']" alt="" style="width:100%;margin:0 auto;display:block">
            </span>
          </el-popover>
        </el-col>
        <el-col :span="2" >{{item['粉丝数']}}</el-col>
        <el-col :span="2" >{{item['服务评分']}}</el-col>
        <el-col :span="2">{{item['签约机构']}}</el-col>
        <el-col :span="2">{{item['粉丝号召指数']}}</el-col>
        <el-col :span="2">{{item['内容消费指数']}}</el-col>
        <el-col :span="2">{{item['商业转化指数']}}</el-col>
        <el-col :span="2">{{item['淘指数']}}</el-col>
        <el-col :span="2">{{item['合作']}}</el-col>
      </el-row> 
    </el-card>
  </div>
</template>

<script>
  import { timestampToTime } from '~/utils/tool'

  export default {
    props: {
      labelName: {
        type: String
      },
      descContent: {
        type: Array,
        default: () => []
      },
      timeList: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        options: [],
        activeName: 'second',
        value: ''
      }
    },
    methods: {
      setOptions(timeList) {
        timeList.forEach(item => {
          item.key = `${timestampToTime(item.startTime)} - ${timestampToTime(item.endTime)}`
        })
        return timeList
      }
    },
    watch: {
      labelName(newValue, oldValue) {
        console.log(newValue, 'newValue')
      }
    },
  }
</script>

<style scoped lang="scss">
.list-container{
  width: 1180px;
  margin: 0 auto;
  padding-top: 20px;
  .box-card{
    margin-bottom: 20px;
    .el-card__body{
      padding-left: 0;
    }
    span{
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;
      width: 58px;
      font-family: SourceHanSansCN-Normal;
      font-size: 14px;
      color: #333;
    }
    ul{
      display: inline-block;
      li{
        display: inline-block;
      }
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
   .avater{
     img{
      width: 46px;
      height: 46px;
      border-radius: 50%;
     }
  }
}
</style>
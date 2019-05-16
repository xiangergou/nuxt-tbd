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
          sizi="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span style="float:right">榜单说明</span>
      </div>
      <el-row justify="space-between" class="card-table__title">
        <el-col :span="1">序号</el-col>
        <el-col :span="4" style="text-align:center">达人信息</el-col>
        <el-col :span="4">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2">达人信息</el-col>
        <el-col :span="2" style="text-align:right">粉丝数</el-col>
      </el-row>
      <el-row justify="space-between" class="card-table__body">
        <el-col :span="2">1</el-col>
        <el-col :span="1">昵称</el-col>
        <el-col :span="1" >昵称</el-col>
        <el-col :span="2" >昵称</el-col>
        <el-col :span="15" style="text-align:right">淘指数</el-col>
      </el-row> 
      <el-row justify="space-between" class="card-table__body">
        <el-col :span="3">1</el-col>
        <el-col :span="3">昵称</el-col>
        <el-col :span="3" >昵称</el-col>
        <el-col :span="15" style="text-align:right">淘指数</el-col>
      </el-row> 
    </el-card>
  </div>
</template>


<script>
  import { listApi } from '~/api/latestlist.js';

  export default {
    props: {
      labelName: {
        type: String
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
      getAreas () {
        listApi.getAreas().then(res => {
          console.log(res.data.data, 'res')
        })
      },
      getDaren() {
        listApi.getDaren().then(res => {
          console.log(res.data.data, 'res')
        })
      },
      init () {
        Promise.all([this.getAreas(), this.getDaren()])
      }
    },
    mounted () {
      console.log(this.labelName, 'labelName');
      this.init();
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
}
</style>
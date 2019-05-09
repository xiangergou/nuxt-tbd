<template>
  <section class="navi-container">
    <header class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#FB5E42"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">内容电商</el-menu-item>
        <el-menu-item index="2">商家榜</el-menu-item>
        <el-menu-item index="3">机构榜</el-menu-item>
      </el-menu>
    </header>
    <section class="content">
      <div class="card" style="border:none">
        <div class="img"><img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt=""> </div>
        <div class="article">
          <h3>距离李佳琦只差这个神器了，银泰柜姐拍淘宝短视频秒变网红</h3>
          <h4>下面通过两名柜姐的案例来了解一下淘宝短视频的新动作吧～</h4>
          <i>淘宝短视频</i>
          <span>小榜君  2019-4-26</span>
        </div>
      </div>
      <div class="card">
        <div class="img"><img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt=""> </div>
        <div class="article">
          <h3>距离李佳琦只差这个神器了，银泰柜姐拍淘宝短视频秒变网红</h3>
          <h4>下面通过两名柜姐的案例来了解一下淘宝短视频的新动作吧～</h4>
          <i>淘宝短视频</i>
          <span>小榜君  2019-4-26</span>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
  import people from '~/components/navi/list-people'
  export default {
    components: {
      people,
    },
    data() {
      return {
        activeIndex: '1',
        currentTabComponent: people
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key
      }
    }
  }
</script>

<style lang="scss">
.navi-container{
  background: #f7f7f7;
  .nav{
    width: 100%;
    background: #FB5E42;
    .el-menu{
      width: 1180px;
      margin: 0 auto;
      height: 46px;
      .el-menu-item{
        height: 46px;
        line-height: 46px;
        border-width: 3px;
      }
    }
  }
  .content{
    max-width: 1180px;
    margin: 20px auto;
    background: #fff;
    padding: 0 25px;
    box-sizing: border-box;
    .card{
      padding: 25px 0;
      box-sizing: border-box;
      cursor: pointer;
      color: #d9d9d9;
      display: flex;
      background: #fff;
      border-top: 1px solid #d6d6d6;
      .img{
        vertical-align: top;
        width: 250px;
        height: 140px;
        background: #ff8b77;
        overflow: hidden;
      }
      .article{
        flex: 1;
        vertical-align: top;
        padding-left: 25px;
        box-sizing: border-box;
        h3{
          height: 27px;
          font-family: SourceHanSansCN-Medium;
          font-size: 18px;
          color: #333;
          letter-spacing: 0;
        }
        h4{
          margin-top: 5px;
          height: 42px;
          font-family: SourceHanSansCN-Regular;
          font-size: 14px;
          color: #999;
          letter-spacing: 0;
          line-height: 21px;
          overflow: hidden;
        }
        i{
          display: block;
          margin-top: 7px;
          height: 20px;
          line-height: 20px;
          font-family: SourceHanSansCN-Regular;
          font-size: 14px;
          color: #666;
        }
        span{
          display: inline-block;
          margin-top: 22px;
          font-family: SourceHanSansCN-Normal;
          font-size: 14px;
          color: #666;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>
<template>
  <div class="active-container">
    <header>
    </header>
    <section class="content">
       <ul class="tab">
        <li class="tab-item tab-item-active ng-star-inserted">大咖榜</li>
        <li class="tab-item ng-star-inserted">主播榜</li>
        <li class="tab-item ng-star-inserted">新秀榜</li>
      </ul>
      <div class="table">
        <div _ngcontent-c9="" class="bg-top"></div>
        <div _ngcontent-c9="" class="bg-bottom"></div>
        displaydsa

        text-shadow
        ds
      </div>
    </section>
    <footer class="content-bottom">
      <div class="show-text">该榜单联合淘榜单、阿里v任务共同发布，基于媒体、红人全网的粉丝影响力及内容传播数据，结合淘系线上消费大数据，打通内容营销全链路</div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'active'
  }
</script>

<style lang="scss">
 .active-container{
    background: url(https://img.alicdn.com/tfs/TB1vSG5Jr2pK1RjSZFsXXaNlXXa-466-2680.png) top #0f0f0f;
    margin: 0;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Arial,sans-serif;
    color: #fff;
    header{
      margin-bottom: 90px;
      background: url(https://txws-athena-prod.oss-cn-hangzhou.aliyuncs.com/common/1555052601547.png) top no-repeat;
      height: 617px;
    }
    .content{
      width: 1386px;
      margin: 0 auto;
       ul{
            list-style: none;
        text-align: center;
        position: relative;
        li{
          display: inline-block;
          background: url(https://img.alicdn.com/tfs/TB1WQuBJzDpK1RjSZFrXXa78VXa-320-100.jpg) no-repeat;
          width: 320px;
          height: 100px;
          font-size: 50px;
          color: #ffdfa5;
          line-height: 100px;
          text-shadow: 0 0 5px rgba(255,255,255,.5);
          cursor: pointer;
          margin: 0 10px;
        }
  
        .tab-item-active{
          color: #89531a;
          background: url(https://img.alicdn.com/tfs/TB180mLJwHqK1RjSZFgXXa7JXXa-320-100.png) no-repeat;
          text-shadow: 0 0 10px rgba(255,255,255,.5);
        }
      }
            .tab:after {
    height: 1px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: url(https://img.alicdn.com/tfs/TB1cpaNJAvoK1RjSZFDXXXY3pXa-1255-1.jpg) bottom no-repeat;
}
     
      .table{
            padding: 30px 60px;
          table-layout: fixed;
          background: url(https://img.alicdn.com/tfs/TB1B419JCzqK1RjSZFHXXb3CpXa-1386-103.jpg) repeat-y;
          border-width: 1px;
          position: relative;
      }
      .table::after, .table::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: url(https://img.alicdn.com/tfs/TB1eaHrJyLaK1RjSZFxXXamPFXa-10-1700.jpg) 0 0/10px 100%;
    z-index: 100;
}
table{
      width: 100%;
    font-size: 28px;
    position: relative;
    z-index: 100;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
.content-bottom {
    padding-bottom: 50px;
    text-align: center;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.bg-top {
    background: url(https://img.alicdn.com/tfs/TB1_SC8JrvpK1RjSZFqXXcXUVXa-1386-197.png) top no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 197px;
}
.bg-bottom {
    background: url(https://img.alicdn.com/tfs/TB1x8W_JpzqK1RjSZFCXXbbxVXa-1386-129.jpg) bottom no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 129px;
}

    }
    footer{
          padding-bottom: 50px;
    text-align: center;
    .show-text{
        width: 850px;
        margin: 30px auto 0;
        font-size: 20px;
        font-family: SourceHanSansCN;
        color: rgba(198,161,91,.769);
        line-height: 1.2;
        text-align: center;
    }
    }
 } 
</style>








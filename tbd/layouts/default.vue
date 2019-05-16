<template>
  <div class="app-container">
    <header class="home__nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo"   mode="horizontal" @select="handleSelect">
        <el-menu-item style="padding-left:0">
          <nuxt-link to="/home" class="navbar-logo">
            <img src="~assets/images/logo.svg"
            style="height: 40px;">
          </nuxt-link>
          <nuxt-link to="/home" class="navbar-logo">
            <img src="~assets/images/logo-word.png" 
            style="height: 40px;width: 120px;margin-left: 10px">
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2" >榜单</el-menu-item>
        <el-menu-item index="3" >内容电商</el-menu-item>
        <el-menu-item style="float: right">
          <el-input placeholder="请输入关键词搜索" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" v-waves></el-button>
        </el-input>
        </el-menu-item>
      </el-menu>
    </header>
    <nuxt />
    <div class="fixed">
      <el-button class="home-active__btn">
        <div @mouseout="active=false"  @mouseover="active=true">
          <div v-if="active">顶部</div>
          <div v-else class="btn-more">
            <p style="margin-bottom: 2px">更多</p>
            <p>内容</p>
          </div>
        </div>
      </el-button>
      <el-button>
        <el-popover
          placement="left"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <p slot="reference">微信号</p>
        </el-popover>
      </el-button>
      <el-button>
        <el-popover
          placement="left"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <p slot="reference">二维码</p>
        </el-popover>
      </el-button>
      <el-button @click="backTop">
        顶部
      </el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        input3: '',
        active: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({
              path: '/home'
            })
            break;
          case '2':
            this.$router.push({
              path: '/navi'
            })
            break;
          case '3':
            this.$router.push({
              path: '/article'
            })
            break;
        }
      },
       // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      backTop () {
        let that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop () {
        let that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 0) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    }
  }
</script>

<style lang="scss">
.app-container {
  .home__nav{
    overflow: auto;
    .el-menu{
      border: none !important;
      margin: 0 auto;
      height: 60px;
      width: 1180px;
      background: #fafafa;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
      color: #ff502e !important;
      font-family: SourceHanSansCN-Regular;
      font-size: 14px;
      cursor: pointer;
    }
    .el-input-group__append button.el-button{
      padding: 12px;
    }
  }
  .fixed{
    position: fixed;
    bottom: 70px;
    right: 50%;
    z-index: 999;
    -webkit-transform: translateX(680px);
    -ms-transform: translateX(680px);
    transform: translateX(680px);
    width: 46px;
    button{
      width: 46px;
      height: 46px;
      background: #fff;
      margin-bottom: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .el-button+.el-button{
      margin-left:0;
    }
  }
}

</style>
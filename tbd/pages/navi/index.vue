<template>
  <section>
    dsad
  </section>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
.home__nav{
  overflow: auto;
  background: #fafafa;
  .el-menu{
    border: none !important;
    margin: 0 auto;
    height: 60px;
    width: 1180px;
    background: #fafafa;
  }
}
</style>
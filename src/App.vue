<template>
  <div id="app">
    <cbs-header></cbs-header>
    <router-view/>
  </div>
</template>

<script>
import CbsHeader from "./components/CBSHeader";
export default {
  components: {
    CbsHeader
  }
}
</script>

<style lang="less">
  #app {
    font-family: "Microsoft YaHei";
    font-size: 14px;
    color: #000000;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }
</style>

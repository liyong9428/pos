<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入侧边栏组件
import LeftNav from './components/common/LeftNav'
export default {
  name: 'app',
  components: {
     LeftNav
  }
}
</script>

<style lang="less">
   #app {
       overflow: hidden;
       width: 100%;
       .main {
          width: 94%;
          background: #EFF2F7;
          float: left;
          height: 100%;
          overflow: hidden;
       }
   }
</style>

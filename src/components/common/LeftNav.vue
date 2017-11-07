<template>
  <div id="leftnav">
     <ul>
        <li><i class="iconfont icon-finance"></i><div>收银</div></li>
        <li><i class="iconfont icon-store"></i><div>店铺</div></li>
        <li><i class="iconfont icon-shangpin"></i><div>商品</div></li>
        <li><i class="iconfont icon-huiyuan"></i><div>会员</div></li>
        <li><i class="iconfont icon-0065"></i><div>统计</div></li>
     </ul>
  </div>
</template>
<script>
export default {
  name: "leftnav",
}
</script>
<style lang="less" scoped>
    #leftnav {
      //   min-width: 81.95px;
        width: 6%;
        height: 100%;
        min-heigt: 100%;
        background: #000;
        float: left;
        color: #fff;
        background: #0080CB;
        text-align: center;
        li {
           border-bottom:1px solid #20a0ff;
           padding:10px;
           margin: 0 auto;
           .iconfont {font-size: 24px}
        }
    }
</style>

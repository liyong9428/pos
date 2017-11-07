<template>
  <div id="pos">
     <el-row>
        <el-col :span="7" class="order">
           <el-tabs>
              <el-tab-pane label="点餐">
                 <el-table :data="this.$store.state.tableData" border style="width: 100%">
                    <el-table-column prop="goodsName" label="商品"></el-table-column>
                    <el-table-column prop="count" label="数量" width="65"></el-table-column>
                    <el-table-column prop="price" label="金额" width="65"></el-table-column>
                    <el-table-column label="操作" width="100">
                       <template scope="scope">
                         <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                         <el-button type="text" size="small" @click="delGoods(scope.row)">删除</el-button>
                      </template>
                    </el-table-column>
                 </el-table>
                 <div class="count">
                    <span>数量：{{totalCount}}件</span>
                    <span>金额：{{totalPrice}}元</span>
                 </div>
                 <span class="end">
                     <el-button type="success">挂单</el-button>
                     <el-button type="primary" @click="delAllGoods">删除</el-button>
                     <el-button type="info" @click="checkOut">结账</el-button>`
                 </span>
              </el-tab-pane>
              <el-tab-pane label="挂单">挂单</el-tab-pane>
              <el-tab-pane label="外卖">外卖</el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="17">
           <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul>
                    <li v-for="item in oftenGoods" @click="addOrderList(item)">
                        <span>{{item.goodsName}}</span>
                        <span class="o-price">￥{{item.price}}元</span>
                    </li>
                </ul>
              </div>
         　</div>
         　<div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                 <ul class='cookList'>
                   <li v-for="item in typeGoods[0]" @click="addOrderList(item)">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                   </li>
                 </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                 <ul class='cookList'>
                  <li v-for="item in typeGoods[1]"  @click="addOrderList(item)">
                     <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                     <span class="foodName">{{item.goodsName}}</span>
                     <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                 <ul class='cookList'>
                  <li v-for="item in typeGoods[2]"  @click="addOrderList(item)">
                     <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                     <span class="foodName">{{item.goodsName}}</span>
                     <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                 <ul class='cookList'>
                  <li v-for="item in typeGoods[3]"  @click="addOrderList(item)">
                     <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                     <span class="foodName">{{item.goodsName}}</span>
                     <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
         　</div>
        </el-col>
     </el-row>
  </div>
</template>
<script>
// 引入axios模块
import Axios from 'axios'
import {mapState,mapGetters,mapMutations} from 'vuex'

export default {
  name: "pos",
  data(){
    return {}
  },
  computed: {
     ...mapState(['oftenGoods','typeGoods','totalCount','totalPrice'])

  },
  methods: {
     ...mapMutations(['addOrderList','delAllGoods','delGoods','checkOut'])


  },
  created() {
// 　　　Axios.get('http://jspang.com/DemoApi/oftenGoods.php')
//       .then(response=>{
//          this.$store.state.oftenGoods = response.data;
//       })
//       .catch(error=>{
//          this.$message({
//             showClose: true,
//             message: '您的网络错误，请重新获取',
//             type: 'error'
//          });
//       })

      // Axios.get('http://jspang.com/DemoApi/typeGoods.php')
      // .then(response=>{
      //    this.$store.state.typeGoods=response.data;
      // })
      // .catch(error=>{
      //     console.log(error);
      //     alert('网络错误，不能访问');
      // })
  },
　mounted() {
　　 document.querySelectorAll('.el-col').forEach((item)=>{
        item.style.height = document.body.clientHeight+'px';
    })
  }
}

</script>
<style lang="less" scoped>
    .order {
       background: #f9fafc;
       border-right: 1px solid #ccc;
       .end {
          line-height:100px;
          height: 100px;
          padding: 0 80px;
       }
       .count {
          height: 42px;
          line-height: 42px;
          padding-left: 10px;
          background: #EFF2F7;
          font-size: 14px;
          span {

             margin-right: 30px
          }
       }
    }
    .often-goods{
      .title{
        height: 21px;
        border-bottom:1px solid #D3DCE6;
        background-color: #F9FAFC;
        padding:10px;
        color: #8391A5;
        font-size: 14px
      }
      .often-goods-list ul {
          padding: 10px;
          overflow: hidden;
      }
      .often-goods-list ul li{
         list-style: none;
         float:left;
         border:1px solid #E5E9F2;
         padding:10px;
         margin:5px;
         color: #fff;
         background: #20A0FF;
         border-radius: 8px;
         cursor: pointer;
      }
      .o-price{
         color:#fff;
      }
    }
    .goods-type {
       margin-top: 20px;
       clear: both;
       .cookList li{
             list-style: none;
             width:23%;
             border:1px solid #E5E9F2;
             height: auot;
             overflow: hidden;
             background-color:#fff;
             padding: 2px;
             float:left;
             margin: 2px;
             border-radius: 8px;
             cursor: pointer;
         }
         .cookList li span{
              display: block;
              float:left;
         }
         .foodImg{
             width: 40%;
         }
         .foodName{
             font-size: 18px;
             padding-left: 10px;
             color:brown;
             margin-top: 10px;
         }
         .foodPrice{
             font-size: 16px;
             padding-left: 10px;
             padding-top:10px;
             font-weight: bold;
         }
    }
</style>

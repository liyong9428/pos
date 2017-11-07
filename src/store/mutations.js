import Vue from 'vue'
export default {
   addOrderList(state,goods){
     state.totalCount = 0; //汇总数量清0
     state.totalPrice = 0;
     if(state.tableData.some(item=>item.goodsId==goods.goodsId) ){
        state.tableData.filter(item=>item.goodsId==goods.goodsId)[0].count++;
     }else{
        state.tableData.push({
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count:1
        });
     }

     state.tableData.forEach((item)=>{
         state.totalCount += item.count;
         state.totalPrice += item.count*item.price;
     });
  },
   delGoods(state,goods){
     state.tableData = state.tableData.filter(item=>item.goodsId != goods.goodsId);
     state.totalCount -= goods.count;
     state.totalPrice -= goods.count*goods.price;
  },
  delAllGoods(state){
     state.tableData = [];
     state.totalCount = 0;
     state.totalPrice = 0;
  },
  checkOut(state){
     if(state.totalCount!=0){
        state.tableData = [];
        state.totalCount = 0;
        state.totalPrice = 0;
     }
  }
}

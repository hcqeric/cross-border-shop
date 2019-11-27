<template>
  <div class="bargain-list-item">
    <div class="item-left">
      <img src="../../assets/touxiang.png" alt="">
      <div class="item-info">
        <p>2956****@136.com</p>
        <p class="comment">盖世刀法</p>
      </div>
    </div>
    <div class="item-right">砍掉￥10.00</div>
  </div>
</template>

<script>
  export default {
    name: "BargainItem"
  }
</script>

<style scoped lang="less">
.bargain-list-item{
  box-sizing: border-box;
  background: #ffffff;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  .item-left{
    display: flex;
    img{
      width: 35px;
      height: 35px;
      margin-right: 12px;
    }
    .comment{
      color: #969696;
    }
  }
}
</style>
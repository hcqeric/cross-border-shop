<template>
    <div class="cbs-header">
        <div class="cbs-header-home">
            <img src="../assets/home@2x.png" alt="">
        </div>
        <div class="cbs-header-right">
            <div class="cbs-header-cart">
                <img src="../assets/cart@2x.png" alt="">
            </div>
            <div class="cbs-header-more">
                <img src="../assets/more@2x.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CBSHeader"
  }
</script>

<style scoped lang="less">
.cbs-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 45px;
    background: #000000;
    font-size: 0;
    .cbs-header-home{
        margin-left: 16px;
        img{
            width: 34px;
            height: 34px;
        }
    }
    .cbs-header-right{
        display: flex;
        align-items: center;
        margin-right: 16px;
       .cbs-header-cart{
           margin-right: 8px;
           img{
               width: 34px;
               height: 34px;
           }
       }
       .cbs-header-more{
           img{
               width: 34px;
               height: 34px;
           }
       }
    }
}
</style>
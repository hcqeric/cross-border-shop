<template>
    <div class="cbs-header">
        <div class="cbs-header-home" @click="$router.push('/')">
            <img src="../assets/home@2x.png" alt="">
        </div>
        <div class="cbs-header-right">
            <div class="cbs-header-cart">
                <img src="../assets/cart@2x.png" alt="">
            </div>
            <div class="cbs-header-more" @click="showMore = true">
                <img src="../assets/more@2x.png" alt="">
            </div>
        </div>
        <van-popup v-model="showMore" position="right"
                   :style="{ height: '100%', width: '260px' }">
            <div class="home-category">
                <div class="home-category-account">
                    <van-icon name="user-circle-o" />
                    <div class="account-welcome">
                        <van-button v-if="!isLogin" style="width: 80px;" round type="primary" size="mini"  plain @click="changeLogin">{{$t('clickLogin')}}</van-button>
                        <p v-else>{{$t('hello')}}<span>XXXX</span></p>
                    </div>
                    <van-cell :title="$t('myAccount')" is-link @click="toCateDetail"/>
                </div>
                <div class="home-category-list">
                    <van-cell title="爽肤水" is-link />
                    <van-cell title="粉底液" />
                    <van-cell title="面膜" is-link />
                    <van-cell title="口红" is-link />
                </div>
            </div>
        </van-popup>
        <van-popup v-model="showCateDetail" position="right"
                   :style="{ height: '100%', width: '260px' }">
            <div class="home-category">
                <van-nav-bar
                        :title="$t('myAccount')"
                        left-arrow
                        @click-left="onClickLeft"
                />
                <div class="home-category-list">
                    <van-cell title="我的购物车" @click="toAccountDetail(1)" is-link />
                    <van-cell title="砍价" @click="toAccountDetail(2)" is-link />
                    <van-cell title="我的订单" @click="toAccountDetail(3)" is-link />
                    <van-cell title="账号设置" @click="toAccountDetail(4)" is-link />
                    <van-cell title="注销登录" @click="toAccountDetail(5)" is-link />
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
  export default {
    name: "CBSHeader",
    data () {
      return {
        showCateDetail: false,
        showMore: false,
        isLogin: false
      }
    },
    methods:{
      changeLogin() {
        this.showMore = false;
        this.$router.push('/login');
      },
      toCateDetail(){
        this.showCateDetail = true;
      },
      onClickLeft(){
        this.showCateDetail = false;
      },
      toAccountDetail(id){
        this.showMore = false;
        this.showCateDetail = false;
        if (id === 1) { // 我的购物车
          this.$router.push('/cart');
        } else if (id === 2) { // 砍价
          this.$router.push('/bargain');
        } else if (id === 3) { // 我的订单
          this.$router.push('/order');
        } else if (id === 4) { // 账号设置
          this.$router.push('/account');
        } else if (id === 5) { // 注销登录
          this.$router.push('/login');
        }
      }
    }
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
    height: 45PX;
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
.home-category{
    height: 100vh;
    overflow-y: scroll;
    .van-nav-bar{
        height: 53px;
        line-height: 53px;
        background-color: #d2d2d2;
        &:after{
            border: none;
        }
        .van-nav-bar__arrow{
            color: #000000;
            font-size: 18px;
        }
        .van-nav-bar__title{
            color: #000000;
        }
    }
    &-account{
        background: #D2D2D2;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        .van-icon.van-icon-user-circle-o{
            font-size: 34px;
            margin-bottom: 16px;
        }
        .account-welcome{
            margin-bottom: 16px;
            p{
                font-size: 14px;
                span{
                    padding-left: 4px;
                }
            }
        }
    }
    .van-cell{
        color: #000000;
        background-color: transparent;
        &:after{
            border: none;
        }
        .van-cell__right-icon{
            color: #000000;
        }
    }
}
</style>
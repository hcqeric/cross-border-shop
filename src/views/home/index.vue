<template>
    <div class="home">
        <div class="home-cont">
            <div class="home-cont-search">
                <van-search
                        v-model="keywords"
                        background="#f2f2f2"
                        placeholder="请输入搜索关键词"
                        shape="round"
                        @search="onSearch"
                >
                </van-search>
            </div>
            <div class="home-cont-cate">
                <img src="../../assets/banner1.png" alt="">
            </div>
            <div class="home-cont-cate">
                <img src="../../assets/banner2.png" alt="">
            </div>
        </div>
        <div class="home-footer">
            <div class="home-footer-actions">
                <van-button style="width: 80px;margin-right: 15px;" type="primary" size="small"  plain @click="changeLogin(1)">{{$t('loginNow')}}</van-button>
                <van-button style="width: 80px;" type="primary" size="small"  plain @click="changeLogin(2)">{{$t('registerMember')}}</van-button>
            </div>
            <van-divider>{{$t('contactUs')}}</van-divider>
            <div class="home-footer-contacts">
                <img src="../../assets/facebook.png" alt="">
                <img src="../../assets/wechat.png" alt="">
                <img src="../../assets/line.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
        return{
            keywords: ''
        }
    },
    methods: {
      onSearch(val) {
        console.log(val);
      },
      changeLogin(type) {
        if (type === 1) {
          this.$router.push('/login');
        } else if (type === 2) {
          this.$router.push('/register');
        }

      }
    },
      mounted() {
        this.$getData('/api/v1/sys/menu/nav', {}, 'GET').then(res=>{
            console.log(res);
        })
      }
  }
</script>

<style scoped lang="less">
.home{
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
    padding-top: 45PX;
    &-cont{
        background: #f2f2f2;
        padding-bottom: 23px;
        &-search{
            padding-bottom: 5px;
            .van-search__content{
                background-color: #ffffff;
            }
        }
        &-cate{
            margin: 0 10px 10px;
            overflow: hidden;
            border-radius: 10px;
            min-height: 218PX;
            img{
                width: 100%;

            }
        }
    }
    &-footer{
        background: #E6E6E6;
        &-actions{
            display: flex;
            justify-content: center;
            padding-top: 38px;
            .van-button{
                border-radius: 10px;
            }
        }
        .van-divider{
            color: #000000;
            border-color: #d2d2d2;
        }
        &-contacts{
            display: flex;
            justify-content: center;
            padding-bottom: 16px;
            img{
                margin: 0 12px;
                width: 33px;
                height: 33px;
            }
        }
    }
}
</style>

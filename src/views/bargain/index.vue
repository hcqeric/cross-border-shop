<template>
    <div class="bargain">
        <div class="bargain-cont" style="height:500px">
            <div class="bargain-cont-goods" >

            </div>
            <div class="bargain-cont-countdown">
            </div>
            <div class="bargain-cont-actions">
                <van-button style="width: 80px;" type="primary" size="small"  plain @click="changeLogin(2)">{{$t('registerMember')}}</van-button>
                <van-button style="width: 80px;" type="primary" size="small"  plain @click="changeLogin(2)">{{$t('registerMember')}}</van-button>
            </div>
        </div>
        <div class="bargain-footer">
            <van-tabs v-model="currentTab" animated sticky :offset-top="45" @click="changeTab">
                <van-tab :title="$t('cutRecord')" :name="1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <van-cell
                            v-for="item in list"
                            :key="item"
                            :title="item"
                        />
                    </van-list>
                </van-tab>
                <van-tab :title="$t('cutOrder')" :name="2">
                    <div style="height: 500px">
                        aaa
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
        return{
            countDownTime: '',
            list: [],
            loading: false,
            finished: false,
            currentTab: 1
        }
    },
    methods: {
      changeTab(name) {
        console.log(name);
      },
      changeLogin(type) {
        if (type === 1) {
          this.$router.push('/login');
        } else if (type === 2) {
          this.$router.push('/register');
        }
      },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        }
    }
  }
</script>

<style scoped lang="less">
.bargain{
    width: 100vw;
    box-sizing: border-box;
    padding-top: 45PX;
    &-cont{
        background: #ffffff;
        padding: 12px;
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
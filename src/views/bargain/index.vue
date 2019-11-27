<template>
    <div class="bargain">
        <div class="bargain-cont">
            <div class="bargain-cont-goods" >
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
                <div class="goods-info">
                    <div>烟酰胺护肤套装美白补水保湿保烟酰胺护肤套装美白补水保湿保</div>
                    <div>
                        <p><del>{{$t('dollar')}}189</del></p>
                        <p>{{$t('bargainTo')}}<span>{{$t('dollar')}}179.00</span></p>
                    </div>
                </div>
            </div>
            <div class="bargain-cont-countdown">
                23:00:00{{$t('bargainLeftPrice')}}
            </div>
            <div class="bargain-cont-actions">
                <van-button style="width: 278px;" round type="primary" @click="changeLogin(2)">{{$t('inviteFriendCanCut')}}{{$t('dollar')}}98.00</van-button>
                <van-button style="width: 278px;" round type="primary" plain @click="changeLogin(2)">{{$t('buyAtCurrentPrice')}}</van-button>
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
                        <bargain-item
                            v-for="item in list"
                            :key="item"
                        />
                    </van-list>
                </van-tab>
                <van-tab :title="$t('cutOrder')" :name="2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <bargain-item
                            v-for="item in list"
                            :key="item"
                        />
                    </van-list>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import BargainItem from "../../components/bargain/BargainItem";
  export default {
    name: "index",
      components:{
          BargainItem
      },
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
        padding: 12px 12px 32px;
        &-goods{
            background: #F7F7F7;
            height: 116px;
            box-sizing: border-box;
            padding: 15px 11px 0;
            display: flex;
            img{
                height: 80px;
                width: 80px;
                margin-right: 12px;
                flex-shrink: 0;
            }
            .goods-info{
                height: 80px;
                flex: 1;
                overflow: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 0;
                color: #000000;
                div{
                    line-height: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 15px;
                }
                p {
                    margin-top: 4px;
                    height: 20px;
                    line-height: 20px;
                    font-size: 16px;
                    span{
                        color: #E94445;
                        padding-left: 6px;
                    }
                }
            }
        }
        &-countdown{
            color: #969696;
            font-size: 12px;
            margin: 30px 0 10px;
            text-align: center;
        }
        &-actions{
            display: flex;
            flex-direction: column;
            align-items: center;
            .van-button{
                margin-bottom: 18px;
            }
        }
    }
    &-footer{
        background: #E6E6E6;
        .van-tabs__wrap.van-hairline--top-bottom:after{
            border: none;
        }
        /deep/ .van-tabs__nav{
            background: #F7F7F7;
        }
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
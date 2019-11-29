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
                <van-button style="width: 278px;" round type="primary" @click="inviteFriend">{{$t('inviteFriendCanCut')}}{{$t('dollar')}}98.00</van-button>
                <van-button style="width: 278px;" round type="primary" plain @click="buyNow">{{$t('buyAtCurrentPrice')}}</van-button>
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
        <van-popup round v-model="buyNowPop">
            <div class="pop-content">
              <div class="pop-content-header">
                <p>{{$t('bargainPop.buyNowTipTop')}}</p>
                <p>{{$t('bargainPop.buyNowTipBottomStart')}}<span>{{$t('dollar')}}179.00</span>{{$t('bargainPop.buyNowTipBottomEnd')}}</p>
              </div>
              <div class="pop-content-footer">
                <van-button style="width: 145px" size="large" round type="primary" @click="changeLogin(2)">{{$t('bargainPop.bottomConfirmTxt')}}</van-button>
                <van-button style="width: 145px" size="large" round type="primary" plain @click="buyNow">{{$t('bargainPop.bottomCancelTxt')}}</van-button>
              </div>
            </div>
        </van-popup>
      <van-popup :style="{ height: '280px' }" position="bottom" v-model="inviteFriendPop">
        <div class="invite-content">
          <div class="invite-content-header">
            <p>{{$t('invitePop.inviteTip')}}</p>
          </div>
          <div class="invite-content-txt">
            <van-field
              style="color: #969696"
              v-model="inviteMessage"
              rows="3"
              disabled
              autosize
              type="textarea"
            />
          </div>
          <div class="invite-content-footer">
            <van-button style="width: 305px" size="large" round type="primary" @click="changeLogin(2)">{{$t('invitePop.inviteCopy')}}</van-button>
          </div>
        </div>
      </van-popup>
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
      return {
        inviteMessage: '优惠，护肤美白，老友帮忙砍一刀 http://dfjkmmm,.com/ ',
        inviteFriendPop: false,
        buyNowPop: false,
        countDownTime: '',
        list: [],
        loading: false,
        finished: false,
        currentTab: 1
      }
    },
    methods: {
      inviteFriend () {
        this.inviteFriendPop = true;
      },
      buyNow() {
        this.buyNowPop = true;
      },
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
  .bargain {
    width: 100vw;
    box-sizing: border-box;
    padding-top: 45PX;
    background: #f2f2f2;

    &-cont {
      background: #ffffff;
      padding: 12px 12px 32px;

      &-goods {
        background: #F7F7F7;
        height: 116px;
        box-sizing: border-box;
        padding: 15px 11px 0;
        display: flex;

        img {
          height: 80px;
          width: 80px;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .goods-info {
          height: 80px;
          flex: 1;
          overflow: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 0;
          color: #000000;

          div {
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

            span {
              color: #E94445;
              padding-left: 6px;
            }
          }
        }
      }

      &-countdown {
        color: #969696;
        font-size: 12px;
        margin: 30px 0 10px;
        text-align: center;
      }

      &-actions {
        display: flex;
        flex-direction: column;
        align-items: center;

        .van-button {
          margin-bottom: 18px;
        }
      }
    }

    &-footer {
      .van-tabs__wrap.van-hairline--top-bottom:after {
        border: none;
      }

      /deep/ .van-tabs__nav {
        background: #F7F7F7;
      }
      /deep/ .van-tabs__line{
        background: #000000;
      }
    }
    .pop-content {
      box-sizing: border-box;
      padding: 15px;
      width: 88vw;
      &-header{
        padding: 35px 0 8px;
        p {
          text-align: center;
          font-size: 18px;
          color: #000000;
          margin-bottom: 24px;
          span{
            color: #E94445;
            padding: 4px;
          }
        }
      }
      &-footer{
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
      }
    }
    .invite-content{
      padding: 6px 25px 0;
      &-header{
        text-align: center;
        font-size: 15px;
        padding: 32px;
      }
      &-txt{
        border: 1px solid #969696;
      }
      &-footer{
        margin-top: 25px;
        text-align: center;
      }
    }
  }


</style>
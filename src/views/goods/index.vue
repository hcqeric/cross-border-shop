<template>
  <div class="goods">
    <transition name="van-fade">
      <div class="goods-tab-list" v-if="scrollTop > 45">
        <van-tabs v-model="active" @click="clickTab" animated>
          <van-tab v-for="item in tabList" :name="item.index" :title="item.title" :key="item.index"></van-tab>
        </van-tabs>
      </div>
    </transition>
    <div id="info" class="goods-info">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
          <img :src="thumb" >
        </van-swipe-item>
      </van-swipe>
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price"><span class="dollar">{{$t('dollar')}}</span>{{ formatPrice(goods.price) }}<span>{{$t('freeShipping')}}</span></div>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell :title="$t('chooseSize')" is-link @click="sorry" />
      </van-cell-group>
    </div>
    <div id="comment" class="goods-comment">
      <div class="comment-title">
        <span>{{$t('commentTxt')}}(300)</span>
        <van-rate v-model="commentSumRate"
                  :size="15"
                  color="#000000"
                  readonly/>
      </div>
      <div class="comment-brief-list">
        <div class="comment-item"></div>
        <div class="list-more">
          <van-button style="width: 80px;" round type="primary" size="small"  plain @click="changeLogin(2)">{{$t('moreComment')}}</van-button>
        </div>
      </div>
    </div>
    <div id="detail" class="goods-detail">
      <div class="goods-detail-title">
        <van-divider>{{$t('goodsDetail')}}</van-divider>
      </div>
      <div class="goods-detail-info">
        <img src="https://img30.360buyimg.com/sku/jfs/t1/47349/11/14141/371431/5db26fd6Ef56efb0c/4187261bbb1e1fcc.jpg" alt="">
      </div>
    </div>
    <van-goods-action v-if="goods.type === 1">
      <van-goods-action-button type="primary" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
    <van-goods-action v-if="goods.type === 2">
      <van-goods-action-button type="primary" plain @click="sorry">
        {{$t('buyAtBeginPrice')}}
      </van-goods-action-button>
      <van-goods-action-button type="primary" @click="sorry">
        {{$t('bargainNow')}}<br/>{{$t('priceMinAt')}}{{$t('dollar')}}110
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {Toast} from 'vant';

export default {

  data() {
    return {
      commentSumRate: 4,
      active: 1,
      scrollTop: 0,
      tabList: [
        {
          title: '商品',
          index: 1
        },
        {
          title: '评价',
          index: 2
        },
        {
          title: '详情',
          index: 3
        }
      ],
      goods: {
        title: '美国伽力果（约680g/3个）',
        price: 2680,
        express: '免运费',
        remain: 19,
        type: 2, // 1: 普通， 2: 砍价
        thumb: [
          'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
          'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
        ]
      }
    };
  },
  watch: {
    scrollTop(newVal) {
      // why 90 ?  90 = header(45PX) + tab-height(44px) = 89 约等于 90 （/(ㄒoㄒ)/~~ cry）
      const commentTop = document.querySelector('#comment').offsetTop - 90;
      const detailTop = document.querySelector('#detail').offsetTop - 90;
      if (newVal >= 0 && newVal < commentTop) {
        this.active = 1;
      } else if (newVal >= commentTop && newVal < detailTop) {
        this.active = 2;
      } else if (newVal >= detailTop) {
        this.active = 3;
      }
    }
  },
  methods: {
    formatPrice() {
      return (this.goods.price / 100).toFixed(2);
    },
    clickTab(name) {
      console.log(name)
      if (name === 1) {
        window.scrollTo(0, document.querySelector('#info').offsetTop);
      } else if (name === 2) {
        window.scrollTo(0, document.querySelector('#comment').offsetTop);
      } else {
        window.scrollTo(0, document.querySelector('#detail').offsetTop);
      }
    },
    sorry() {
      Toast('暂无后续逻辑~');
    },
    handleScroll(){
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
  }
};
</script>

<style lang="less">
  .test{
    height: 75px;
  }
.goods {
  padding-top: 45PX;
  padding-bottom: 40px;
  .goods-tab-list{
    position: fixed;
    top: 45PX;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #ffffff;
    .van-tabs__line{
      background-color: #000000;
    }
  }
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
    .van-swipe__indicators{
      align-items: center;
    }
    .van-swipe__indicator--active{
      background-color: #000000;
      width: 8px;
      height: 8px;
      border-radius: 100%;
    }
  }

  &-title {
    font-size: 16px;
    color: #000000;
  }

  &-price {
    margin-top: 20px;
    font-size: 22px;
    color: #000000;
    span{
      color: #969696;
      font-size: 14px;
      margin-left: 8px;
    }
    .dollar{
      font-size: 16px;
      color: #000000;
      margin-left: 0;
    }
  }

  &-cell-group {
    margin: 10px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-comment{
    background: #ffffff;
    padding: 0 16px;
    .comment-title{
      height: 43px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .comment-brief-list{
      padding: 0 16px;
      .list-more{
        text-align: center;
        padding-bottom: 18px;
      }
    }
  }
  &-detail{
    background: #ffffff;
    margin-top: 12px;
    &-title{
      height: 63px;
      padding-top: 2px;
      vertical-align: center;
      margin: 0 105px;
      .van-divider{
        font-weight: bold;
        color: #000000;
        border-color: #d2d2d2;
      }
    }
    &-info{
      img{
        width: 100%;
      }
    }
  }
  .van-goods-action-button--last{
    margin: 0;
    border-radius: 0;
  }
  .van-goods-action-button--first{
    margin: 0;
    border-radius: 0;
    background: #ffffff;
    color: #000000;
  }
}
</style>

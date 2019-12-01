<template>
  <div class="cart-list">
    <div class="cart-list-title">{{$t('cartList.title')}}</div>
    <div class="cart-item" v-for="item in goods" :key="item.id">
      <div class="item-top">{{$t('cartList.delete')}}</div>
      <div class="item-mid">
        <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" alt="">
        <div class="item-mid-right">
          <div class="van-multi-ellipsis--l2">烟酰胺护肤套装美白补水保湿护肤品水乳化妆品全套正品学生男士女</div>
          <div class="right-mid van-hairline--surround">
            <!--<span></span><van-icon name="arrow-down" />-->
            <van-field
                    value="3件套清爽护肤"
                    right-icon="arrow-down"
                    disabled
            />
          </div>
          <div class="price-num">
            <span v-if="item.type === 1">{{$t('dollar')}}170.00</span>
            <span v-else class="is-active">{{$t('dollar')}}170.00<del>￥199.00</del></span>
            <van-stepper v-model="number" /></div>
        </div>
      </div>
      <div class="item-bottom"></div>
    </div>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="$t('cartList.settlement')"
      @submit="onSubmit"
    >
      <div class="bar-total-num">{{$t('cartList.totalNum', {num: 2})}}</div>
    </van-submit-bar>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar } from 'vant';

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data() {
    return {
      checkedGoods: ['1', '2', '3'],
      number: 1,
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        type: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        type: 2,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        type: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
    };
  },

  computed: {
    // submitBarText() {
    //   const count = this.checkedGoods.length;
    //   return '结算' + (count ? `(${count})` : '');
    // },

    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },

  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },

    onSubmit() {
      // Toast('点击结算');
      this.$router.push('/settlement');
    }
  }
};
</script>

<style lang="less">
  .cart-list{
    box-sizing: border-box;
    background: #f2f2f2;
    padding: 45PX 0 60PX;
    min-height: 100vh;
    &-title{
      padding: 10px 10px 0;
      font-size: 18px;
    }
    .cart-item{
      box-sizing: border-box;
      margin: 10px 10px 0;
      padding: 0 10px 22px;
      border-radius: 5px;
      background: #ffffff;
      .item-top{
        text-align: right;
        font-size: 13px;
        color: #969696;
        padding: 10px 0;
      }
      .item-mid{
        display: flex;
        img{
          width: 80px;
          height: 80px;
          margin-right: 12px;
        }
        .right-mid{
          margin: 4px 0 10px;
          &.van-hairline--surround:after{
            border-color: #d2d2d2;
            border-radius: 6px;
          }
        }
        .price-num{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          .is-active{
            color: #E94445;
          }
          del {
            margin-left: 5px;
            font-size: 12px;
            color: #969696;
          }
        }
      }
    }
    .bar-total-num{
      padding-left: 15px;
      color: #969696;
    }
    .van-submit-bar__text{
      color: #000000;
      .van-submit-bar__price{
        color: #000000;
      }
    }
    .van-button--danger{
      background-color: #000000;
      border-color: #000000;
    }
  }
.card-goods {
  padding: 10px 0;

  &__item {
    position: relative;
    /*background-color: #fafafa;*/

    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
</style>

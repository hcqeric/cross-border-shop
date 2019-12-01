<template>
    <div class="settlement">
        <div class="settlement-cont">
            <div class="settlement-title">{{$t('cartList.settlement')}}</div>
            <div class="settlement-info">
                <div class="settlement-info-title">{{$t('settlement.expressInfo')}}</div>
                <div class="settlement-info-form">
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="username"
                                clearable
                                :label="$t('settlement.consignee')"
                                :placeholder="$t('settlement.consigneeHolder')"
                        />
                    </div>
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="password"
                                type="password"
                                :label="$t('settlement.mobile')"
                                :placeholder="$t('settlement.mobileHolder')"
                        />
                    </div>
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="password"
                                right-icon="arrow"
                                :label="$t('settlement.province')"
                                :placeholder="$t('settlement.provinceHolder')"
                        />
                    </div>
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="username"
                                right-icon="arrow"
                                clearable
                                :label="$t('settlement.city')"
                                :placeholder="$t('settlement.cityHolder')"
                        />
                    </div>
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="password"
                                type="textarea"
                                rows="3"
                                :label="$t('settlement.address')"
                                :placeholder="$t('settlement.addressHolder')"
                        />
                    </div>
                    <div class="settlement-form-item van-hairline--surround mb18">
                        <van-field
                                v-model="password"
                                :label="$t('settlement.postalCode')"
                                :placeholder="$t('settlement.postalCodeHolder')"
                        />
                    </div>
                </div>
            </div>
            <div class="settlement-info payment">
                <div class="settlement-info-title">{{$t('settlement.paymentInfo')}}</div>
                <div class="settlement-info-payment">
                    <div class="payment-input-label">{{$t('settlement.inputDiscountCode')}}</div>
                    <div class="settlement-form-item van-hairline--surround">
                        <van-field
                                v-model="username"
                                clearable
                                :placeholder="$t('settlement.inputDiscountCode')"
                        />
                    </div>
                    <div class="official-discount-get">
                        <span>{{$t('settlement.addOfficialMedia')}}</span>
                        <van-button size="small" round type="primary" plain>{{$t('settlement.getNow')}}</van-button>
                    </div>
                    <div class="payment-method-amount">
                        <div class="line">
                            <span class="line-label">{{$t('settlement.paymentMethod')}}</span>
                            <span>{{$t('settlement.cashOnDelivery')}}</span>
                        </div>
                        <div class="line">
                            <span class="line-label">{{$t('settlement.paymentArrival')}}</span>
                            <span>￥300.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="$t('cartList.submitOrder')"
                @submit="onSubmit"
        >
            <div class="bar-total-num">{{$t('cartList.totalNum', {num: 2})}}</div>
        </van-submit-bar>
        <!-- 获取优惠券-->
        <van-popup :style="{ height: '286px' }" position="bottom" v-model="discountCodePop">
            <div class="discount-content">
                <div class="discount-content-header">{{$t('settlement.copyAndAddOfficialMedia')}}</div>
                <div class="bargain-list-item van-hairline--top">
                    <div class="item-left">
                        <img src="../../assets/facebook.png" alt="">
                        <div class="item-info">
                            <p>Facebook</p>
                            <p class="comment">13613613636</p>
                        </div>
                    </div>
                    <div class="item-right">
                        <van-button size="small" round type="primary" @click="changeLogin(2)">
                            {{$t('invitePop.inviteCopy')}}
                        </van-button>
                    </div>
                </div>
                <div class="bargain-list-item van-hairline--top">
                    <div class="item-left">
                        <img src="../../assets/line.png" alt="">
                        <div class="item-info">
                            <p>messenger</p>
                            <p class="comment">13613613636</p>
                        </div>
                    </div>
                    <div class="item-right">
                        <van-button size="small" round type="primary" @click="changeLogin(2)">
                            {{$t('invitePop.inviteCopy')}}
                        </van-button>
                    </div>
                </div>
                <div class="bargain-list-item van-hairline--top">
                    <div class="item-left">
                        <img src="../../assets/wechat.png" alt="">
                        <div class="item-info">
                            <p>微信</p>
                            <p class="comment">13613613636</p>
                        </div>
                    </div>
                    <div class="item-right">
                        <van-button size="small" round type="primary" @click="changeLogin(2)">
                            {{$t('invitePop.inviteCopy')}}
                        </van-button>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
        return{
          discountCodePop: true,
          checkedGoods: ['1', '2', '3'],
            username:'',
            password: '',
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
        }
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
    methods:{
      onSubmit() {
        // Toast('点击结算');
        this.$router.push('/settlement');
      }
    }
  }
</script>

<style scoped lang="less">
.settlement{
    width: 100vw;
    min-height: 100vh;
    background: #f2f2f2;
    box-sizing: border-box;
    padding: 45PX 12px 50PX;
    &-cont{
        .settlement-title{
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 22px;
        }
        .settlement-info{
            border-radius: 5px;
            overflow: hidden;
            background: #ffffff;
            &.payment{
                margin-top: 14px;
                margin-bottom: 30px;

            }
            &-title{
                box-sizing: border-box;
                height: 32px;
                line-height: 32px;
                background: #000000;
                color: #ffffff;
                font-size: 13px;
                padding-left: 14px;
            }
            &-form{
                padding: 14px 10px 0;
            }
            &-payment{
                padding: 15px 15px 0;
                .payment-input-label{
                    margin-bottom: 5px;
                }
                .official-discount-get{
                    padding: 10px 5px 18px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px dashed #d2d2d2;
                }
                .payment-method-amount{
                    padding: 31px 8px 0;
                    .line {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 14px;
                        color: #000000;
                        margin-bottom: 20px;
                        .line-label{
                            color: #969696;
                        }
                    }
                }
            }
        }
        /*/deep/ .*/
        .settlement-form-item{
            padding: 2px 0;
        }
        .settlement-form-item.van-hairline--surround:after{
            border-color: #D2D2D2;
            border-radius: 6px;
        }
        .settlement-relate{
            display: flex;
            justify-content: space-between;
            margin-bottom: 57px;
            font-size: 15px;
            .relate-reg{
                padding-left: 8px;
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

    .discount-content{
        &-header{
            padding: 36px 0 43px 41px;
        }
        .bargain-list-item{
            box-sizing: border-box;
            padding: 10px 14px;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            .item-left{
                display: flex;
                img{
                    width: 42px;
                    height: 42px;
                    margin-right: 14px;
                }
                .comment{
                    color: #969696;
                }
            }
            .item-right{
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>
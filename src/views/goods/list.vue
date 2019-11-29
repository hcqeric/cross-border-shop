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
            <div class="bargain-cont-countdown" v-if="!isCut">
                23:00:00{{$t('bargainLeftPrice')}}
            </div>
            <div class="bargain-cont-actions">
                <span v-if="isCut">{{$t('cutPriceNum')}}{{$t('dollar')}}10.00</span>
                <van-button v-else style="width: 278px;" round type="primary" @click="cutPrice">{{$t('friendCutPriceTxt')}}</van-button>
                <van-button style="width: 278px;" round type="primary" plain @click="changeLogin(2)">{{$t('iWantIt')}}</van-button>
            </div>
        </div>
        <div class="cut-footer">
            <div class="goods-recommend">{{$t('goodsRecommend')}}</div>
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goods_list">
                    <div class="goods-list-item" @click="goDetail(item)" v-for="item in list" :key="item">
                        <div class="recommend-goods-info">
                            <div class="info-tag" v-if="item % 3 === 0">活动中</div>
                            <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"></van-image>
                            <div class="van-multi-ellipsis--l2">{{ item }}...</div>

                            <div class="bottom_box">
                                <span :class="item % 3 === 0 ? 'sale-price' : ''">￥500</span>
                                <del v-if="item % 3 === 0">￥2195</del>
                            </div>
                        </div>
                    </div>
                </div>
            </van-list>
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
                currentTab: 1,
                isCut: false
            }
        },
        methods: {
            changeLogin(type) {
                if (type === 1) {
                    this.$router.push('/login');
                } else if (type === 2) {
                    this.$router.push('/register');
                }
            },
            cutPrice(){
                this.isCut = true;
            },
            goDetail(id){
                console.log(id);
            },
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(`${this.list.length + 1}`);
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
        background: #f2f2f2;
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
                span{
                    margin: 30px 0 18px;
                    font-size: 17px;
                }
            }
        }
        .cut-footer{
            margin-top: 10px;
            background: #ffffff;
            .goods-recommend{
                padding: 20px 10px 10px;
            }
            .goods_list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .goods-list-item{
                    width: 50%;
                    margin: 10px 0;
                    .recommend-goods-info {
                        margin: 0 10px;
                        position: relative;
                        overflow: hidden;
                        /deep/ .van-image__img {
                            min-height: 166px
                        }
                        .info-tag{
                            position: absolute;
                            background: #000000;
                            width: 100px;
                            top: 0px;
                            right: 0px;
                            font-size: 13px;
                            transform: rotate(45deg);
                            margin-top: 12px;
                            margin-right: -30px;
                            color: #ffffff;
                            text-align: center;
                            z-index: 2;
                        }
                        .info-title{
                            font-size: 14px;
                            color: #000;
                            height: 49px;
                            overflow: auto;
                        }
                        .bottom_box {
                            color: #000000;
                            font-size: 15px;
                            span.sale-price{
                                color: #E94445;
                            }
                            del{
                                margin-left: 8px;
                                font-size: 13px;
                                color: #969696;
                            }
                        }
                    }
                }

            }
        }
    }
</style>
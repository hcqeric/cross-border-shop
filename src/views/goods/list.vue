<template>
    <div class="goods-list">
        <div class="list-footer">
            <div class="list-cont-search">
                <van-search
                        v-model="keywords"
                        background="#ffffff"
                        placeholder="请输入搜索关键词"
                        shape="round"
                        @search="onSearch"
                >
                </van-search>
            </div>
            <div class="goods-recommend" v-if="list.length > 0">{{$t('goodsRecommend')}}</div>
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goods_list" v-if="list.length > 0">
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
              keywords: '',
              countDownTime: '',
              list: [],
              loading: false,
              finished: false,
              currentTab: 1,
              isCut: false
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
    .goods-list{
        width: 100vw;
        box-sizing: border-box;
        padding-top: 45PX;
        background: #f2f2f2;
        .list-footer{
            background: #ffffff;
            .list-cont-search{
                .van-search__content{
                    background-color: #d2d2d2;
                }
            }
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
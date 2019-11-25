<template>
    <div class="paysucc">
        <div class="paysucc-cont">
            <div class="paysucc-cont-title">{{$t('paysucc')}}</div>
            <div class="paysucc-cont-img">
                <img src="../../assets/pay-succ-bg.png" alt="">
            </div>
            <p>{{$t('packageComeQuick')}}</p>
            <div class="paysucc-cont-btns">
                <van-button style="width: 137px;margin-right: 18px;" round type="primary" plain @click="showUpdatePassword = false">{{$t('toOrder')}}</van-button>
                <van-button style="width: 137px;" round type="primary" plain>{{$t('toHome')}}</van-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
        return{
            username:'',
            password: ''
        }
    }
  }
</script>

<style scoped lang="less">
.paysucc{
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    box-sizing: border-box;
    padding: 14vh 20px 0;
    &-cont{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
<template>
    <div class="forget">
        <div class="forget-cont">
            <div class="forget-title">{{$t('forgetPsdTitle')}}</div>
            <div class="forget-form-item-label">{{$t('mobile')}}</div>
            <div class="forget-form-item van-hairline--surround">
                <div class="forget-dropdown">
                    <van-dropdown-menu :overlay="false">
                        <van-dropdown-item v-model="country" :options="option1" @open="arrowState = false"
                                           @close="arrowState = true"/>
                    </van-dropdown-menu>
                    <van-icon style="font-size: 16px;color: #969696;" :name="arrowState ? 'arrow-down' : 'arrow-up'"/>
                </div>
                <van-field v-model="mobile" clearable/>
            </div>
            <div class="forget-form-item-label">{{$t('verifyCode')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field v-model="code" clearable/>
                </div>
                <van-button round type="info">{{$t('getCode')}}</van-button>
            </div>
            <div class="forget-form-item-label">{{$t('password')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field v-model="password" type="password" :placeholder="$t('regPasswordTip')" clearable/>
                </div>
            </div>
            <div class="forget-form-item-label">{{$t('passwordConfirm')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field
                            v-model="passwordConfirm"
                            type="password"
                            :placeholder="$t('confPasswordTip')"
                    />
                </div>
            </div>
            <div class="forget-btn">
                <van-button style="width: 100%" round type="primary">{{$t('submit')}}</van-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data(){
        return{
            arrowState: true,
            country: 0,
            option1: [
                { text: '中国', value: 0 },
                { text: '马来西亚马来西亚', value: 1 }
            ],
            mobile: '',
            code: '',
            passwordConfirm:'',
            password: ''
        }
    }
  }
</script>

<style scoped lang="less">
@import './style/login.less';
</style>
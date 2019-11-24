<template>
    <div class="forget">
        <div class="forget-cont">
            <div class="forget-title">{{$t('accountSetting')}}</div>
            <div class="forget-form-item-label">{{$t('nickname')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field v-model="nickname" :placeholder="$t('nicknameTip')" clearable/>
                </div>
            </div>
            <div class="forget-form-item-label">{{$t('email')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field v-model="email" disabled/>
                </div>
            </div>
            <div class="forget-form-item-label">{{$t('mobile')}}</div>
            <div class="forget-form-item van-hairline--surround">
                <van-field v-model="mobile" disabled/>
            </div>
            <div class="forget-form-item-label">{{$t('password')}}</div>
            <div class="forget-form-comp-item">
                <div class="forget-form-item van-hairline--surround">
                    <van-field v-model="password" type="password" clearable/>
                    <van-button style="width: 104px;margin-right: 16px;" round type="primary" size="small" plain @click="showUpdatePassword = true">{{$t('updatePassword')}}</van-button>
                </div>
            </div>
            <div class="forget-btn">
                <van-button style="width: 100%" round type="primary">{{$t('saveTxt')}}</van-button>
            </div>
        </div>
        <van-popup
                v-model="showUpdatePassword"
                closeable
                :overlay="false"
                position="bottom"
                :style="{ height: 'calc(100vh - 45px)' }"
        >
            <div class="forget update">
                <div class="forget-cont">
                    <div class="forget-title">{{$t('updatePassword')}}</div>
                    <div class="forget-form-item-label">{{$t('oldPassword')}}</div>
                    <div class="forget-form-comp-item">
                        <div class="forget-form-item van-hairline--surround">
                            <van-field v-model="forgetForm.oldPassword" clearable/>
                        </div>
                    </div>
                    <div class="forget-form-item-label">{{$t('newPassword')}}</div>
                    <div class="forget-form-comp-item">
                        <div class="forget-form-item van-hairline--surround">
                            <van-field v-model="forgetForm.newPassword" clearable/>
                        </div>
                    </div>
                    <div class="forget-form-item-label">{{$t('passwordConfirm')}}</div>
                    <div class="forget-form-item van-hairline--surround">
                        <van-field v-model="forgetForm.confPassword" clearable/>
                    </div>
                    <div class="forget-btn">
                        <van-button style="width: 137px;margin-right: 18px;" round type="primary" plain @click="showUpdatePassword = false">{{$t('cancelTxt')}}</van-button>
                        <van-button style="width: 137px;" round type="primary">{{$t('saveTxt')}}</van-button>
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
                showUpdatePassword: false,
                arrowState: true,
                country: 0,
                option1: [
                    { text: '中国', value: 0 },
                    { text: '马来西亚马来西亚', value: 1 }
                ],
                email: '',
                mobile: '',
                code: '',
                nickname:'',
                password: '',
                forgetForm: {
                    oldPassword: '',
                    newPassword: '',
                    confPassword: ''
                }
            }
        }
    }
</script>

<style scoped lang="less">
@import './style/login.less';
</style>
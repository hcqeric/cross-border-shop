<template>
    <div class="login">
        <div class="login-cont">
            <div class="login-title">{{$t('login')}}</div>
            <div class="login-form-item van-hairline--surround">
                <van-field
                    v-model="username"
                    clearable
                    :label="$t('email')"
                    :placeholder="$t('emailTip')"
                />
            </div>
            <div class="login-form-item van-hairline--surround mt18 mb18">
                <van-field
                    v-model="password"
                    type="password"
                    :label="$t('password')"
                    :placeholder="$t('passwordTip')"
                />
            </div>
            <div class="login-relate">
                <span class="relate-reg" @click="$router.push('/register')">{{$t('register')}}</span>
                <span @click="$router.push('/forget')">{{$t('forgetPsd')}}</span>
            </div>
            <div class="login-btn">
                <van-button style="width: 100%" round type="primary">{{$t('login')}}</van-button>
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
.login{
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    box-sizing: border-box;
    padding: 14vh 20px 0;
    &-cont{
        .login-title{
            font-size: 21px;
            margin-bottom: 111px;
        }
        /*/deep/ .*/
        .login-form-item{
            padding: 2px 0;
        }
        .login-form-item.van-hairline--surround:after{
            border-color: #D2D2D2;
            border-radius: 6px;
        }
        .login-relate{
            display: flex;
            justify-content: space-between;
            margin-bottom: 57px;
            font-size: 15px;
            .relate-reg{
                padding-left: 8px;
            }
        }
    }
}
</style>
<template>
    <div class="login">
        <div class="login-cont">
            <div class="login-title">{{$t('login')}}</div>
            <div class="login-form-item van-hairline--surround">
                <van-field
                    v-model="username"
                    clearable
                    label="邮箱地址"
                    placeholder="输入邮箱地址"
                />
            </div>
            <div class="login-form-item van-hairline--surround mt18">
                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="输入登录密码"
                />
            </div>
            <div class="login-btn">
                <van-button style="width: 100%" round type="primary">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "index"
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
            padding: 5px 0;
        }
        .login-form-item.van-hairline--surround:after{
            border-color: #D2D2D2;
            border-radius: 6px;
        }
    }
}
</style>
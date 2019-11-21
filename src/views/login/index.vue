<template>
    <div class="login">
        <div class="login-cont">
            <div class="login-title">{{$t('login')}}</div>
            <div class="login-form-item">
                <van-field
                    v-model="username"
                    clearable
                    label="邮箱地址"
                    placeholder="输入邮箱地址"
                />
            </div>
            <div class="login-form-item">
                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="输入登录密码"
                />
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
    }
}
</style>
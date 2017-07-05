<template>
    <div id="login">
        <section>
            <div class="login-bg">
                <img src="/src/imgs/logo-new.png" alt="logo">
            </div>
            <!--<img class="login-bg" src="/src/imgs/login/login-bg.png" alt="登录页背景">-->
            <div class="input-wrap">
                <div class="icon-wrap">
                    <i class="iconfont icon-dengluyezhanghao"></i>
                </div>
                <mt-field label="" placeholder="请输入手机号码登陆" type="tel" v-model="phone"></mt-field>
                <!--<input placeholder="请输入手机号码" type="tel" v-model="phone"/>-->
            </div>
            <div class="input-wrap">
                <div class="icon-wrap">
                    <i class="iconfont icon-dengluyemima"></i>
                </div>
                <mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
                <i class="iconfont" :class="[isClose ? 'icon-eyes-close' : 'icon-eyes-open']" @click="isClose = !isClose"></i>
                <!--<input placeholder="请输入密码" type="password" v-model="password"/>-->
            </div>
            <mt-button type="primary" size="large">登录</mt-button>
            <p>
                <a href="#">忘记密码</a>
                <span class="right">
                    还没有账号？
                    <router-link to="/home">立即注册</router-link>
                </span>
            </p>
        </section>
    </div>
</template>
<script type="text/javascript">
    require('./login.scss');
    export default {
        data () {
            return {
                phone: "",
                password: "",
                isClose:true
            }
        },
        mounted () {
        },
        watch: {
        }
    }
</script>

<template>
    <div id="app">
        <!--<mt-header fixed title="固定在顶部">-->
            <!--<mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>-->
            <!--<mt-button icon="more" slot="right"></mt-button>-->
        <!--</mt-header>-->
        <!--<h1>{{msg}}</h1>-->
        <!--<secondcomponent></secondcomponent>-->
        <!--<firstcomponent></firstcomponent>-->
        <!--<ul>-->
            <!--<li><router-link to="/first">点我跳转到第一页</router-link></li>-->
            <!--<li><router-link to="/second">点我跳转到第二页</router-link></li>-->
        <!--</ul>-->
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import firstcomponent from './component/firstcomponent.vue'
    import secondcomponent from './component/secondcomponent.vue'
    export default {
        name : 'app',
        data () {
            return {
                msg : 'Hello App!'
            }
        },
        components:{ firstcomponent , secondcomponent }
    }
</script>
<style lang="scss">
  body{
      font-family:Helvetica , sans-serif;
      margin:0;
      padding:0;
  }
</style>

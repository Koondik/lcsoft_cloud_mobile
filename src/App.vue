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
//    import firstcomponent from './component/firstcomponent.vue'
//    import secondcomponent from './component/secondcomponent.vue'
//    export default {
//        name : 'app',
//        data () {
//            return {
//                msg : 'Hello App!'
//            }
//        },
//        components:{ firstcomponent , secondcomponent }
//    }
</script>
<style lang="scss">
    body{ font-family:Helvetica, sans-serif; margin:0; padding:0; }
    img{ display:block; }
    table{border-collapse:collapse;border-spacing:0;}
    li{list-style:none;}
    fieldset,img{border:0;}
    article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
    q:before,q:after{content:'';}
    a:focus,input,textarea{outline-style:none;}
    input[type="text"],input[type="password"],textarea{outline-style:none;-webkit-appearance:none;}
    textarea{resize:none}
    address,caption,cite,code,dfn,em,i,th,var{font-style:normal;font-weight:normal;}
    legend{color:#000;}
    abbr,acronym{border:0;font-variant:normal;}
    a{color:#0a8cd2;text-decoration:none;}
    a:hover{text-decoration:underline;}
    .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
    .clearfix{display:inline-block;}
    .clearfix{display:block;}
    .clear{clear:both;height:0;font:0/0 Arial;visibility:hidden;}
    .none{display:none}
    .left{float:left}
    .right{float:right}
</style>

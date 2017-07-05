<template>
    <div id="app">
        <transition  :name="transitionName">
            <!--name="page"-->
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'app',
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        mounted () {
        },
        //监听路由的路径，可以通过不同的路径去选择不同的切换效果
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//                if(to.path == '/'){
//                    this.transitionName = 'slide-right';
//                }else{
//                    this.transitionName = 'slide-left';
//                }
            }
        }
    }
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

    .view{
        transition: all .3s;
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
    /*.page-enter{*/
        /*transform: translateX(100%);*/
        /*opacity: 0;*/
    /*}*/
    /*.page-enter-active{*/
        /*transition: all .5s ease;*/
    /*}*/
    /*.page-enter-to{*/
        /*transform: translateX(0);*/
        /*opacity: 1;*/
    /*}*/
    /*.page-leave{*/
        /*transform: translateX(0);*/
        /*opacity: 1;*/
    /*}*/
    /*.page-leave-active{*/
        /*transition: all .5s ease;*/
    /*}*/
    /*.page-leave-to{*/
        /*transform: translateX(-100%);*/
        /*opacity: 0;*/
    /*}*/
</style>
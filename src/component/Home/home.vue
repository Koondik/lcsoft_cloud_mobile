<template>
    <div id="home">
        <mt-tab-container v-model="selected" swipeable="">
            <mt-tab-container-item id="消息">
                1
                <!--<mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->
            </mt-tab-container-item>
            <mt-tab-container-item id="应用中心">
                <app-index></app-index>
                <!--<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>-->
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                3
                <!--<mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>-->
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="消息">
                <i slot="icon" class="iconfont icon-xiaoxi"></i>
                消息
            </mt-tab-item>
            <mt-tab-item id="应用中心">
                <i slot="icon" class="iconfont icon-yingyongzhongxin"></i>
                应用中心
            </mt-tab-item>
            <mt-tab-item id="我的">
                <i slot="icon" class="iconfont icon-tongxunlu"></i>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script type="text/javascript">
    require('./home.scss');
    import appIndex from '../AppCenter/AppIndex/appIndex.vue'
    export default {
        data () {
            return {
                selected: "应用中心"
            }
        },
        method:{

        },
        components:{ appIndex }
    }
//    document.addEventListener('wheel',null,{passive:true})
</script>

<template>
    <div id="appIndex">
        <mt-swipe :show-indicators="false" :auto="0">
            <mt-swipe-item>
                <img src="/src/imgs/AppCenter/banner.png" alt="轮播图" width="100%">
            </mt-swipe-item>
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <!--<mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>
        <app-card v-bind:showTitle="false"></app-card>
        <div class="cell-split-2">
            <div>
                <div class="icon-wrap">
                    <i class="iconfont icon-wodekebiao"></i>
                </div>
                <div class="item-card">
                    <h4>数学</h4>
                    <p>10:00-11:45</p>
                </div>
            </div>
            <div>
                <div class="icon-wrap">
                    <i class="iconfont icon-xueshengkaoqin"></i>
                </div>
                <div class="item-card">
                    <h4>今日签到</h4>
                    <p>3/8</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    require('./appIndex.scss');
    import appCard from '../../Common/appCard/appCard.vue'
    export default {
        data () {
            return {
                value: ""
            }
        },
        components:{ appCard }
    }
</script>

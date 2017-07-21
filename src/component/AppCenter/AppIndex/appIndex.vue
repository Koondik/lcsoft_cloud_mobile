<template>
    <div id="appIndex">
        <mt-swipe :show-indicators="false" :auto="0">
            <mt-swipe-item>
                <img src="../../../imgs/AppCenter/banner.png" alt="轮播图" width="100%">
            </mt-swipe-item>
            <!--<mt-swipe-item>2</mt-swipe-item>-->
            <!--<mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>
        <app-card v-bind:showTitle="false"></app-card>
        <div class="cell-split-2">
            <icon-item-card v-bind:icon="'icon-wodekebiao'" :title="'数学'" :detail="'10:00-11:45'"></icon-item-card>
            <icon-item-card v-bind:icon="'icon-xueshengkaoqin'" :title="'今日签到'" :detail="'3/8'"></icon-item-card>
        </div>
        <mt-cell is-link  class="divider divider-line">
            <icon-item-card v-bind:icon="'icon-xueshengkaoqin'" :title="'课堂表现'" :detail="'语文课：该生上课认真，积极回答问题。'"></icon-item-card>
        </mt-cell>
        <mt-cell is-link >
            <icon-item-card v-bind:icon="'icon-xueshengkaoqin'" :title="'班主任评语'" :detail="'该生上课认真，积极回答问题。'"></icon-item-card>
        </mt-cell>
        <mt-cell class="divider">
            <icon-item-card v-bind:icon="'icon-xueshengkaoqin'" :title="'写请假条'" :detail="'04-17　上午10:00'"></icon-item-card>
            <i class="iconfont icon-more" style="margin-right:7px"></i>
        </mt-cell>
        <mt-cell>
            <div class="cell-info">
                <h4>缺勤了，补个假条吧!</h4>
                <p>10:00&nbsp;数学课缺勤啦</p>
                <router-link to="/index/appList">立即填写</router-link>
            </div>
        </mt-cell>
        <mt-cell class="divider">
            <icon-item-card v-bind:icon="'icon-xueshengkaoqin'" :title="'问卷调查'" :detail="'04-17　下午5:14'"></icon-item-card>
            <i class="iconfont icon-more" style="margin-right:7px"></i>
        </mt-cell>
        <mt-cell>
            <div  class="cell-info">
                <img src="../../../imgs/AppCenter/问卷.png" alt="问卷调查" width="100%">
                <router-link to="/index/login">参与调查</router-link>
            </div>
        </mt-cell>
    </div>
</template>
<script type="text/javascript">
    require('./appIndex.scss');
    import appCard from '../../Common/appCard/appCard.vue';
    import iconItemCard from '../../Common/iconItemCard/iconItemCard.vue';
    export default {
        data () {
            return {
                value: ""
            }
        },
        components:{ appCard , iconItemCard}
    }
</script>

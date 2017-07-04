<template>
    <div id="appCard">
        <div class="title" v-if="showTitle">
            <span>智慧教学</span>
        </div>
        <div class="app-list">
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
            <div class="app">
                <i class="iconfont icon-zichanguanli"></i> <span>资产管理</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    require('./appCard.scss');
    export default {
        data () {
            return {

            }
        },
        props: ['showTitle'],
    }
</script>

<template>
    <div id="appList">
        <section>
            <mt-search
                    v-model="value"
                    cancel-text=""
                    placeholder="请输入查找的应用名称"
                    >
            </mt-search>
            <app-card v-bind:showTitle="appTitle"></app-card>
            <app-card v-bind:showTitle="appTitle"></app-card>
            <app-card v-bind:showTitle="appTitle"></app-card>
            <app-card v-bind:showTitle="appTitle"></app-card>
        </section>
    </div>
</template>
<script type="text/javascript">
    require('./appList.scss');
    import appCard from '../../Common/appCard/appCard.vue'
    export default {
        data () {
            return {
                value: "",
                appTitle:true
            }
        },
        components:{ appCard }
    }
</script>

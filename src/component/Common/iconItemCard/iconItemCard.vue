<template>
    <div id="iconItemCard">
        <div class="icon-wrap">
            <i class="iconfont" :class="icon"></i>
        </div>
        <item-card v-bind:title="title" v-bind:detail="detail" ></item-card>
    </div>
</template>
<script type="text/javascript">
    require('./iconItemCard.scss');
    import itemCard from '../itemCard/itemCard.vue'
    export default {
        data () {
            return {

            }
        },
        props: ['icon','title','detail'],
        components:{ itemCard }
    }
</script>

<template>
    <a id="itemCard">
        <h4>{{title}}</h4>
        <p>{{detail}}</p>
    </a>
</template>
<script type="text/javascript">
    require('./itemCard.scss');
    export default {
        data () {
            return {

            }
        },
        props: ['title','detail'],
    }
</script>

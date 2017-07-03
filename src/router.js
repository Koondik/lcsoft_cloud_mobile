// 定义组件, 也可以像教程之前教的方法从别的文件引入
// const First = {template : '<div><h2>我是第 1 个子页面</h2></div>'};
import login from './component/Login/login.vue';
import secondcomponent from './component/secondcomponent.vue';
export default {
    mode : 'history',
    base : __dirname,
    routes : [
        {
            path : '/login',
            name:'login',
            component : login
        },
        {
            path : '/second',
            component : secondcomponent
        },
        {   //路由重定向
            path: '',
            redirect: { name: 'login' }
        }
    ]
};
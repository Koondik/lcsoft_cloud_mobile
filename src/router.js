// 定义组件, 也可以像教程之前教的方法从别的文件引入
import home from './component/Home/home.vue';
import login from './component/Login/login.vue';
import appList from './component/AppCenter/AppList/appList.vue';
export default {
    mode: 'history',
    base : __dirname,
    routes : [
        {
            path : '/home',
            name:'home',
            component : home
        },
        {
            path : '/login',
            name:'login',
            component : login
        },
        {
            path : '/appList',
            name:'appList',
            component : appList
        },
        {   //路由重定向
            path: '',
            redirect: { name: 'login' }
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        // console.log(savedPosition);
        return { x: 0, y: 0 };
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
    }
};
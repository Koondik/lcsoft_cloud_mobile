// 定义组件, 也可以像教程之前教的方法从别的文件引入
import index from './component/index.vue';
import home from './component/Home/home.vue';
// import login from './component/Login/login.vue';
const login = resolve => require(['./component/Login/login.vue'], resolve); //懒加载
import appList from './component/AppCenter/AppList/appList.vue';
export default {
    mode : 'history',
    base : __dirname,
    routes : [
        {
            path : '/index',
            name:'index',
            component : index,
            children:[
                {
                    path : 'cloud',
                    name:'cloud',
                    component : home
                },
                {
                    path : 'login',
                    name:'login',
                    component : login
                },
                {
                    path : 'appList',
                    name:'appList',
                    component : appList
                }
            ],
            redirect: '/index/cloud'
        },

        {   //路由重定向
            path: '*',
            redirect: '/index/cloud'
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
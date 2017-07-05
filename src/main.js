import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
//数据请求
import VueResource from 'vue-resource';
Vue.use(VueResource);
//mint-ui库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//开启debug模式
Vue.config.debug = true;
// 创建一个路由器实例
// 并且配置路由规则
import obj from './router'
const router = new VueRouter(obj);
// 启动应用
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');


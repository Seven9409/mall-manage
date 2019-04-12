import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import routes from './routes'
import VueResource from 'vue-resource'
import echarts from 'echarts';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(echarts);
Vue.config.productionTip = false;


const router = new VueRouter({
    routes
});
router.push("/homePage/splitCommodity");

Vue.config.productionTip = false;

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')

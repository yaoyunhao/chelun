import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index';

import store from '@/store/index';
import {Popup,Picker} from 'vant';
Vue.use(Popup);
Vue.use(Picker);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
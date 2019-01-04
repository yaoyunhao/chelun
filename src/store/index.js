import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
import upload from './module/upload';
export default new Vuex.Store({
    modules: {
        upload
    },
    plugins: [createLogger()]
})
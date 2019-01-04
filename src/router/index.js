import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import IndexPage from '@/pages/index'
import Ccwt from '@/pages/ccwt';
import Home from '@/pages/home';
const router = new VueRouter({
    routes: [{
        path: '/index',
        component: IndexPage
    }, {
        path: '*',
        redirect: '/home'
    }, {
        path: '/ccwt',
        component: Ccwt
    }, {
        path: '/home',
        component: Home
    }]
})
router.beforeEach((to, from, next) => {
    next();
})
router.afterEach((to, from) => {

})
export default router;
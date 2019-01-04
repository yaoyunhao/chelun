import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import IndexPage from '@/pages/index'
const router = new VueRouter({
    routes: [{
        path: '/index',
        component: IndexPage
    }, {
        path: '*',
        redirect: '/index'
    }]
})
router.beforeEach((to, from, next) => {
    next();
})
router.afterEach((to, from) => {

})
export default router;
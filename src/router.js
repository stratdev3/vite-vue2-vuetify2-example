import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentHome from './components/home/ComponentHome.vue'

Vue.use(VueRouter);

//
// main router object
//
const router = new VueRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            component: ComponentHome,
        },
        {
            path: '/home/index',
            name: 'home',
            component: ComponentHome,
        },
        {
            path: '/test/index',
            name: 'test-index',
            component: () => import('./components/test/ComponentTestIndex.vue'),
        },
    ]
});


export default router

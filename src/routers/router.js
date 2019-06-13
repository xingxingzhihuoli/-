import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
// import home from '../views/home'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/homePage',
            name:'homePage',
            component: () => import('../views/homePage.vue'),
            redirect:'/homePage/home',
            children: [
                {
                    path: '/homePage/home',
                    name:'home',
                    component: () => import('../views/home.vue'),
                },
                {
                    path: '/homePage/userList',
                    component: () => import('../views/userList.vue')
                },
                {
                    path: '/homePage/merchantList',
                    component: () => import('../views/merchantList.vue')
                },
                {
                    path: '/homePage/adminList',
                    component: () => import('../views/adminList.vue')
                },
                {
                    path: '/homePage/orderList',
                    component: () => import('../views/orderList.vue')
                },
                {
                    path: '/homePage/foodList',
                    component: () => import('../views/foodList.vue')
                }
            ]
        },
    ]
})

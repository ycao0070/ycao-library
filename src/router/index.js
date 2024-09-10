import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import store from '../store/store'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/firelogin',
        name: 'FireLogin',
        component: FirebaseSigninView
    },
    {
        path: '/fireregister',
        name: 'FireRegister',
        component: FirebaseRegisterView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (!store.state.isAuthenticated && to.name !== 'FireLogin' && to.name !== 'FireRegister') {
        next({ name: 'FireLogin' })
    } else {
        next()
    }
})

export default router

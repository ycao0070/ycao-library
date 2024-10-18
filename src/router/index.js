import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '@/views/AddBookView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AdminView from '@/views/AdminView.vue'
import ModifyOrDeleteBookView from '@/views/ModifyOrDeleteBookView.vue'
// import store from '../store/store'
import GetBookCountView from '@/views/GetBookCountView.vue'
import FirebaseAddBookView from '@/views/FirebaseAddBookView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import JsonBookAPI from '@/views/JsonBookAPI.vue'

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
        path: '/addbook',
        name: 'AddBook',
        component: AddBookView
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
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView
    },
    {
        path: '/modifyordeletebook',
        name: 'ModifyOrDeleteBook',
        component: ModifyOrDeleteBookView
    },
    {
        path: '/getbookcount',
        name: 'GetBookCount',
        component: GetBookCountView
    },
    {
        path: '/fireaddbook',
        name: 'FirebaseAddBook',
        component: FirebaseAddBookView
    },
    {
        path: '/weather',
        name: 'Weather',
        component: WeatherView
    },
    {
        path: '/countbookapi',
        name: 'CountBookAPI',
        component: CountBookAPI
    },
    {
        path: '/jsonbookapi',
        name: 'JsonBookAPI',
        component: JsonBookAPI
    }
]

const router = createRouter({
    // eslint-disable-next-line no-undef
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     if (!store.state.isAuthenticated && to.name !== 'FireLogin' && to.name !== 'FireRegister') {
//         next({ name: 'FireLogin' })
//     } else {
//         next()
//     }
// })

export default router

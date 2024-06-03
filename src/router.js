import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Home from './views/Home.vue';
import CardPage from './views/CardPage.vue';
import Login from './components/Login.vue';
import Reg from './components/Reg.vue';
import Admin from './views/AdminPage.vue';
import Catlog from './views/Catlog.vue';
import AddFridge from './views/add/AddFridge.vue';
import AddTv from './views/add/AddTv.vue';
import AddPhone from './views/add/AddPhone.vue';
import AddNout from './views/add/AddNout.vue';
import basket from './views/Basket.vue';
import order from './views/Order.vue';
import addNews from './views/AddNews.vue';
import newsPage from './views/newsPage.vue';
import News from './views/News.vue';
import about from './views/About.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: '/',
            component: Home,
        },
        {
            path: '/cardPage/:id',
            name: '/card/:id',
            component: CardPage,
        },
        {
            path: '/catalog',
            name: '/catalog',
            component: Catlog,
        }, {
            path: '/login',
            name: '/login',
            component: Login,
        },
        {
            path: '/reg',
            name: '/reg',
            component: Reg,
        }, {
            path: '/admin',
            name: '/admin',
            component: Admin,
        }, {
            path: '/fridge',
            name: '/fridge',
            component: AddFridge,
        },
        {
            path: '/tv',
            name: '/tv',
            component: AddTv,
        },
        {
            path: '/phone',
            name: '/phone',
            component: AddPhone,
        },
        {
            path: '/nout',
            name: '/nout',
            component: AddNout,
        },
        {
            path: '/basket',
            name: '/basket',
            component: basket,
        }, {
            path: '/order',
            name: '/order',
            component: order,
        },
        {
            path: '/addNews',
            name: '/addNews',
            component: addNews,
        },
        {
            path: '/News',
            name: '/News',
            component: News,
        },
        {
            path: '/news/:id',
            name: '/news/:id',
            component: newsPage,
        },
        {
            path: '/about',
            name: '/about',
            component: about,
        },
    ]
})

export default router;
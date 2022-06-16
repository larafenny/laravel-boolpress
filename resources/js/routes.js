//scriviamo le rotte presente nel FO e gestite da vue

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeComponent from './pages/HomeComponent'
import ContactsComponent from './pages/ContactsComponent'
import NotfoundComponent from './pages/NotfoundComponent'
import BlogComponent from './pages/BlogComponent'
import ChisiamoComponent from './pages/ChisiamoComponent'
import SingleBlogComponent from './pages/SingleBlogComponent'


//definiamo le rotte
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/chi-siamo',
            name: 'chi-siamo',
            component: ChisiamoComponent
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsComponent
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogComponent
        },
        {
            path: '/blog/:id',
            name: 'single-blog',
            component: SingleBlogComponent
        },
        {
            path: '/*',
            name: 'notFound',
            component: NotfoundComponent
        }
    ]
})


export default router;

import homePage from './pages/app-home.cmp.js'
import keepApp from './keep/pages/keep-app.cmp.js'
import mailApp from './mail/pages/mail-app.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },

    {
        path: '/mail-app',
        component: mailApp,
        
    },

    {
        path: '/keep-app',
        component: keepApp,
       
    },
    // {
    //     path: '/book-app',
    //     component: bookApp,
       
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
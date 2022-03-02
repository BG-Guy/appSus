import homePage from './pages/app-home.cmp.js'
import keepApp from './keep/pages/keep-app.cmp.js'
import mailApp from './mail/pages/mail-app.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },

    {
        path: '/mail',
        component: mailApp,
        
    },

    {
        path: '/keep',
        component: keepApp,
       
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
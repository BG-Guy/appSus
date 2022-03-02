import homePage from './pages/app-home.cmp.js'
import keepIndex from './keep/pages/keep-index.cmp.js'
import mailIndex from './mail/pages/mail-index.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },

    {
        path: '/mail',
        component: mailIndex,
        
    },

    {
        path: '/keep',
        component: keepIndex,
       
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
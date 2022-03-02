import homePage from './pages/app-home.cmp.js'
import appKeep from './keep/pages/keep-app.cmp.js'
import appMail from './mail/pages/mail-app.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: appMail,
        
    },

    {
        path: '/keep',
        component: appKeep,
       
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
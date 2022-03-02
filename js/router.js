import homePage from './pages/app-home.cmp.js'
<<<<<<< HEAD
import appKeep from './keep/pages/keep-app.cmp.js'
import appMail from './mail/pages/mail-app.cmp.js'
=======
import aboutPage from './pages/app-about.cmp'
import aboutPag from './pages/app-about.cmp'
>>>>>>> b7a190a10a119cda26f60344877de8fdb5e2264c

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
import homePage from './pages/app-home.cmp.js'
import aboutPage from './pages/app-about.cmp'
import aboutPag from './pages/app-about.cmp'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: aboutPage,
        // children: [
        //     {
        //         path: 'team',
        //         component: aboutTeam
        //     },
        //     {
        //         path: 'services',
        //         component: aboutServices
        //     },
        // ]
    },

    {
        path: '/keep',
        component: aboutPage,
        // children: [
        //     {
        //         path: 'team',
        //         component: aboutTeam
        //     },
        //     {
        //         path: 'services',
        //         component: aboutServices
        //     },
        // ]
    },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
import homePage from './pages/app-home.cmp.js'
import noteApp from './keep/pages/note-app.cmp.js'
import mailApp from './mail/pages/mail-app.cmp.js'
import noteDetails from './keep/pages/note-details.cmp.js';

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
        component: noteApp,
       
    },

    {
        path: '/keep-app/:noteId',
        component: noteDetails
      }
    // {
    //     path: '/book-app',
    //     component: bookApp,
       
    // },
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});
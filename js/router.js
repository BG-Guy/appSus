import homePage from './pages/app-home.cmp.js'
import mailApp  from './mail/pages/mail-app.cmp.js'
import mailDetails  from './mail/pages/mail-details.cmp.js'
import mailEdit  from './mail/pages/mail-edit.cmp.js'
import noteApp from './keep/pages/note-app.cmp.js'
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
        path: '/mail-app/details/:mailId',
        component: mailDetails
   },
   {
    path: '/mail-app/edit/:mailId?',
    component: mailEdit
},
            
    {
        path: '/keep-app',
        component: noteApp,
       
    },
    {
        path: '/keep-app/details/:noteId',
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
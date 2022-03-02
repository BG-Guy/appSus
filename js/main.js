import { router } from './router.js'
import userMsg from '../js/cmps/user-msg.cmp.js'
import appHeader from '../js/cmps/app-header.cmp.js'
import appFooter from '../js/cmps/app-footer.cmp.js'



const options = {
    template: `
        <section>
        <app-header/>
        <user-msg />
        <router-view />
        <app-footer/ >
        </section>
    `,
    components: {
        appHeader,
        appFooter,
        userMsg
    }
};



const app = Vue.createApp(options);
app.use(router);
app.mount('#app');


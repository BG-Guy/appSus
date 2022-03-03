
import { router } from '../../router.js';
import { eventBus } from '../../services/eventBus-service.js';
import { mailService } from '../services/mail-service.js';

export default {
    template: `
     <router-link :to="'/mail-app'">back</router-link> 
    <section class="mail-read">
        <div class="mail-header">
    <h1> {{mailToRead.subject}} </h1>
    <section class="icons">
        <button @click="sendMail"> send </button>
        <button @click="removeMail"> trash </button>
     </section>
   </div>
    <div class="mail-adress">
   <span> {{mailToRead.name}} </span>
   <span class="mail"> {{'<' + mailToRead.to +'>'}}</span>
 </div>
    <pre>
    {{mailToRead.body}}
   </pre>
  </section>   
    
    `,

    data() {
        return {
            mailToRead:'',

        }
    },
    components: {
    

    },

    created() {
        const id = this.$route.params.mailId;
        if (id) {
            mailService.get(id)
                .then(mail => this.mailToRead = mail);
                console.log(this.mailToRead);
               
        }
    },

    methods: {
        removeMail() {
            this.mailToRead.isDeleted= true
            mailService.save(this.mailToRead)
            router.push('/mail-app')
        },
        sendMail(){
            router.push('/mail-app/edit/'+this.mailToRead.id)
        }
    },

    computed: {

    },
    
}
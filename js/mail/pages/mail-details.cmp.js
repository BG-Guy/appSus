
import { router } from '../../router.js';
import { showErrorMsg, showSuccessMsg } from '../../services/eventBus-service.js';

import { mailService } from '../services/mail-service.js';

export default {
    template: `
 <section class="details">
      <label class="back">
          <router-link :to="'/mail-app'">📫</router-link> 
      </label> 
  <section class="mail-read">
        <div class="mail-header space-between">
    <h1> {{mailToRead.subject}} </h1>
    <section class="icons">
        <button @click="sendMail" class="send"> 📤 </button>
        <button @click="removeMail" class="trash"> 🗑 </button>
     </section>
   </div>
    <div class="mail-adress flex">
   <span> {{mailToRead.name}} </span>
   <span class="mail"> {{'<' + mailToRead.to +'>'}}</span>
   <span class="mail"> {{mailToRead.sentAt}}</span>
   </div>
    <p class="mail-msg">
    {{mailToRead.body}}
    </p>
   </section>   
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
            showSuccessMsg('Deleted succesfully');
        },
        sendMail(){
            router.push('/mail-app/edit/'+this.mailToRead.id)
        }
    },

    computed: {

    },
    
}
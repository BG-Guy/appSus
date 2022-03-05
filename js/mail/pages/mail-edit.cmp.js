import { router } from '../../router.js';
import mailLabel from '../cmps/mail-label.cmp.js';
import { mailService } from '../services/mail-service.js';
import { showErrorMsg, showSuccessMsg } from '../../services/eventBus-service.js';



export default {
    template: `
 <section class="edit">
     
     <div class="mail-form flex">
       <router-link :to="'/mail-app'"><svg class="back"></svg></router-link> 
        <input v-model="mail.name" type="text" placeholder="to" class="form-control">
         <input  v-model="mail.subject" placeholder="subject" type="text" class="form-control">
         <textarea name="text" v-model="mail.body"  placeholder="message" class="text-area" >
             {{getTexArea}}
            </textarea>
    <section class="mail-actions">
    <svg @click="send" class="sent-mail-btn icon"></svg>
    <svg @click="draft" class="delete-btn icon"></svg>
   </section>
    </div>

 </section>

    `,

    data() {
        return {
            mail:{
                name:'',
                subject:'',
                body:'',
                to:'momo@momo.com',
            }
        }
    },
    components: {
        mailLabel,

    },

    created() {
        const id = this.$route.params.mailId;
        if (id) {
            mailService.get(id)
                .then(mail => this.mail = mail);
        }
    },
    mounted() {
    },

    methods: {
        send(){
            let newMail=mailService.getEmptyMail(this.mail)
            newMail.sent = true
            newMail.isRead = true

                mailService.save(newMail)
                router.push('/mail-app')
                showSuccessMsg('Mail Send');
        },
        draft(){
            let newMail=mailService.getEmptyMail(this.mail)
            newMail.isDraft = true
                mailService.save(newMail)
                router.push('/mail-app')
                showSuccessMsg('Saved To Drafts');

        },
    },

    computed: {
        getTexArea(){
            this.mail.body=''

        }

    },
    
}
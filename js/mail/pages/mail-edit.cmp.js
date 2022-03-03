import { router } from '../../router.js';
import mailLabel from '../cmps/mail-label.cmp.js';
import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../services/eventBus-service.js';


export default {
    template: `
    <router-link :to="'/mail-app'">back</router-link> 
<div class="mail-form mail-list">
    <div>
        To  <input v-model="mail.name" type="text" class="form-control">
    </div>
    <div class="">
         subject <input  v-model="mail.subject" type="text" class="form-control">
    </div>
    <textarea name="text" v-model="mail.body" class="text-area" ref="msgBody" >
        {{getTexArea}}
    </textarea>
    <label class="actions">
   <button @click="send"> send </button>
   <button @click="draft"> Draft </button>
         </label>
</div>

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
        this.$refs.msgBody.focus()
    },

    methods: {
        send(){
            let newMail=mailService.getEmptyMail(this.mail)
            newMail.sent = true
                mailService.save(newMail)
                router.push('/mail-app')
        },
        draft(){
            let newMail=mailService.getEmptyMail(this.mail)
            newMail.isDraft = true
                mailService.save(newMail)
                router.push('/mail-app')

        },
    },

    computed: {
        getTexArea(){
            this.mail.body=''

        }

    },
    
}
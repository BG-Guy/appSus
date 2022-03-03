import { mailService } from '../services/mail-service.js';


export default {
    props:['mail'],
    template: `
<section :class='isRead' class='mail-coulmn' @click="setRead">
        <input class="star" type="checkbox" @click="setImportent" :checked='!mail.importent'>
        <div class="mail-prew">
             <router-link :to="'/mail-app/details/'+mail.id">
       <span class="mail-line-list">{{mail.name}} </span>
       <span class="mail-line-list"> {{mail.subject}}</span>
       <span class="mail-line-list"> {{ mail.body}}</span>
       <span class="mail-line-list"> {{mail.sentAt}}</span>
       <span class="mail-line-list"> {{mail.addressee}}</span>
     </router-link>
    </div>
   <section class="actions">
       <button type="button" @click="removeMail(mail.id)" class="btn-delte"> X</button>
    </section>

</section>
 
    `,
    components: {
    },
    data(){
        return {

        }
    },
   
    methods: {
        removeMail(id){
            this.$emit('remove', id)
        },
        setImportent(){
            this.mail.importent =  !this.mail.importent
            this.mail.isRead= !this.mail.isRead
            mailService.save(this.mail)
        },
        setRead(){
            this.mail.isRead= !this.mail.isRead
            mailService.save(this.mail)
        },
    },
    computed: {
        isRead(){
            return (this.mail.isRead) ? 'read' : 'unread'

        }

    },
};

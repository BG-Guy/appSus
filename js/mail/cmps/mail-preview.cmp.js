import { mailService } from '../services/mail-service.js';


export default {
    props:['mail'],
    template: `
<section :class='isRead' class="mail-coulmn space-between" @click="setRead">
    <input class="star" type="checkbox" @click="setImportent" :checked='!mail.importent'>
  <div class="mail-prew">
             <router-link :to="'/mail-app/details/'+mail.id">
      <span> {{mail.name}} </span>
      <span>  {{mail.subject}}</span>
      <span>{{ mail.body}}</span>
      <span> {{mail.sentAt}}</span>
      <span> {{mail.addressee}}</span>
     </router-link>
  </div>
    
   <section class="mail-actions flex">
       <button type="button" v-if="mail.isDeleted" @click="unRemoveMail(mail.id)" class="btn-delte">⤴</button>
       <span class="mail-status"> {{checkMailStatus}}</span>
       <button type="button" @click="removeMail(mail.id)"  class="trash">🗑 </button>
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
        unRemoveMail(id){
            this.$emit('unRemove', id)
        },
        setImportent(){
            this.mail.importent =  !this.mail.importent
            this.mail.isRead= !this.mail.isRead
            mailService.save(this.mail)
        },
        setRead(){
            this.mail.isRead= true
            mailService.save(this.mail)
        },
    },
    computed: {
        isRead(){
            return (this.mail.isRead) ? 'read' : 'unread'

        },
        checkMailStatus(){
            if(this.mail.isDeleted) return;
            return (this.mail.isRead) ? '✉': '📧'
        }

    },
};

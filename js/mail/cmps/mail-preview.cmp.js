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
    
   <section class="mail-actions">
       <button type="button" v-if="mail.isDeleted" @click="unRemoveMail(mail.id)" class="btn-delte"> &#10555</button>
       <img :src=checkMailStatus class="mail-box">
       <button type="button" @click="removeMail(mail.id)" class="btn-delte">
           <img src="../mail-img/mail-close.png" alt="delete"> </button>
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
            this.mail.isRead= !this.mail.isRead
            mailService.save(this.mail)
        },
    },
    computed: {
        isRead(){
            return (this.mail.isRead) ? 'read' : 'unread'

        },
        checkMailStatus(){
            if(this.mail.isDeleted) return;
            return (this.mail.isRead) ? '../mail-img/mail-open.png': '../mail-img/mail-open.png'
        }

    },
};

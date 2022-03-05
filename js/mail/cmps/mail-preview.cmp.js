import { mailService } from '../services/mail-service.js';


export default {
    props:['mail'],
    template: `
<section :class='isRead' class="mail-coulmn flex">
    <input class="star" type="checkbox" @click="setImportent" :checked='!mail.importent'>
    <router-link :to="'/mail-app/details/'+mail.id">
  <div class="mail-prew flex space-between"  @click="setRead">
      <span> {{mail.name}} </span>
      <span>  {{mail.subject}}</span>
      <span class="mail-list-prev">{{mail.body}}</span>
      <span> {{mail.sentAt}}</span>
      <span> {{mail.addressee}}</span>
    </div>
</router-link>
    
   <section class="mail-actions flex">
       <svg v-if="mail.isDeleted" @click="unRemoveMail(mail.id)"
        class="btn-delte"> ⤴</svg>
       <span class="mail-status" v-if="!mail.isDeleted"> {{checkMailStatus}}</span>
       <svg @click="removeMail(mail.id)"  class="trash-btn"></svg>
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
            mailService.save(this.mail)
        },
        setRead(){
            this.mail.isRead= true
            mailService.save(this.mail)
            this.$emit('read')
        },
    },
    computed: {
        isRead(){
            return (this.mail.isRead) ? 'read' : 'unread'

        },
        checkMailStatus(){
            if(this.mail.isDeleted) return;
            return (this.mail.isRead) ? '📨': '📧'
        },

    },
};

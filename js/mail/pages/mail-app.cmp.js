import mailList from "../cmps/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js";
import mailFilter from "../cmps/mail-filter.cmp.js";
import mailLabel from "../cmps/mail-label.cmp.js";
import mailEdit from "./mail-edit.cmp.js";
// import { eventBus } from '../services/eventBus-service.js';

export default {
  template: `
    <div class ="main-app">
         <mail-filter @filtered="setFilter" />  
    <section class="mail-app app-main">
        <mail-label @choose="setChoose" /> 
        <router-link to="/mail-app/edit" >send new mail</router-link>
    <mail-list :mails="mailsForDisplay" @unRemove="unRemoveMail" @remove="removeMail"  />
    </section>
  </div>   
    `,

  data() {
    return {
      mails: [],
      selectedMail: null,
      filterBy: null,
      mode: null,
    };
  },

  components: {
    mailList,
    mailFilter,
    mailLabel,
    mailEdit,
  },

  created() {
    mailService.query().then((mails) => {
      this.mails = mails;
    });
  },
  methods: {
    selectMail(mail) {
      this.selectedMail = mail;
    },
    setFilter(filter) {
      this.filterBy = filter;
    },
    setChoose(choose) {
      this.mode = choose;
      mailService.getMailsInMode(this.mode)
        .then((mails) =>{
          this.mails =mails
        })
    },
    removeMail(id) {
      const idx = this.mails.findIndex((mail) => mail.id === id);
       
         this.mails[idx].isDeleted = true
        mailService.save(this.mails[idx]);
        this.mails.splice(idx,1)
      // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
      },
      unRemoveMail(id) {
        const idx = this.mails.findIndex((mail) => mail.id === id);
      this.mails[idx].isDeleted = !this.mails[idx].isDeleted;
      }
    

   
  },
  computed: {
    mailsForDisplay() {
      if (!this.filterBy && !this.mode) return this.mails.filter((mail) => (!mail.isDeleted) &&
       (!mail.sent) && (!mail.isDraft) )
      else if(this.mode && !this.filterBy ) return this.mails
      const regex = new RegExp(this.filterBy, "i");
      return this.mails.filter((mail) => regex.test(mail.body) || regex.test(mail.name));
    },
  },
};

import mailList from "../cmps/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js";
import mailFilter from "../cmps/mail-filter.cmp.js";
import mailLabel from "../cmps/mail-label.cmp.js";
import mailEdit from "./mail-edit.cmp.js";

// import { eventBus } from '../services/eventBus-service.js';

export default {
  template: `
    <div class ="main-app main-layout">
         <mail-filter @filtered="setFilter" />  
    <section class="mail-app app-main">
        <mail-label @choose="setChoose" /> 
        <button @click="setCount"> </button>
        <div class="mail-bar">
          <div class="count" :style="setBarStyle">{{getCount}}</div>

        </div>
    <mail-list :mails="mailsForDisplay"  @remove="removeMail"  @unRemove="unRemoveMail" />
    </section>
  </div>   
    `,

  data() {
    return {
      mails: [],
      selectedMail: null,
      filterBy: null,
      mode: null,
      unreadMails:null,
      count:0,
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
      if(this.mails[idx].isDeleted) {
      } else{
          this.mails[idx].isDeleted = true
         mailService.save(this.mails[idx])
           this.mails.splice(idx,1)
      }
    },
      // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
    

     unRemoveMail(id) {
      const idx = this.mails.findIndex((mail) => mail.id === id);
      this.mails[idx].isDeleted = !this.mails[idx].isDeleted;
       mailService.save(this.mails[idx]);
      this.mails= mailService.query()
      },
      setCount(){
        this.unreadMails= this.mails.filter((mail) => !mail.isRead)
        console.log( this.unreadMails.length);
        console.log(this.mails.length)
         this.count = mailService.percentage(this.unreadMails.length, this.mails.length).toFixed(0).toString() + '%'
         console.log(this.count);
      },

      setBarStyle() {

        return {
          'width': this.count,
        }
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

    getCount() {
      return this.count
    }

   
   
  },
};

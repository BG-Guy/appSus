import mailList from "../cmps/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js";
import mailFilter from "../cmps/mail-filter.cmp.js";
import mailLabel from "../cmps/mail-label.cmp.js";
import mailEdit from "./mail-edit.cmp.js";
import { showErrorMsg, showSuccessMsg } from '../../services/eventBus-service.js';


export default {
  template: `
    <div class ="main-app main-layout">
         <mail-filter @filtered="setFilter" />  
    <section class="mail-app app-main">
        <mail-label @choose="setChoose" /> 
        <div class="mail-bar">
          <div class="count" :style="setBarStyle">{{getCount}}</div>

        </div>
    <mail-list :mails="mailsForDisplay" @read="setCount" @remove="removeMail"  @unRemove="unRemoveMail" />
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
        mailService.remove(id)
        showSuccessMsg('Deleted succesfully');
        return this.mails.splice(idx,1)
      } else{
        console.log('hi');
          this.mails[idx].isDeleted = true
         mailService.save(this.mails[idx])
            this.mails.splice(idx,1)
            showSuccessMsg('Deleted succesfully');
      }
    },
    

     unRemoveMail(id) {
      const idx = this.mails.findIndex((mail) => mail.id === id);
      this.mails[idx].isDeleted = !this.mails[idx].isDeleted;
       mailService.save(this.mails[idx]);
      // this.mails= mailService.query()
      this.mails.splice(idx,1)
      },

<<<<<<< HEAD
      
      

=======
    
>>>>>>> 1ff0f3e2cc85d631fc0dcb49006b75771206543f
   
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
    },
    setCount(){
      this.unreadMails= this.mails.filter((mail) => !mail.isRead)
       this.count = mailService.percentage(this.unreadMails.length, this.mails.length).toFixed(0).toString() + '%'
    },
    setBarStyle() {

      return {
        'width': this.count,
      }
    }

   
   
  },

};

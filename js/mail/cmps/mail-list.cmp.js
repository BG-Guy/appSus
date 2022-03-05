import mailPreview from '../cmps/mail-preview.cmp.js'


export default {
    props:['mails'],
    template: `


<!-- <router-link :to="'/mail-app/'+mail.id"> -->  
     <TransitionGroup name="list"  tag="ul" class="mail-list">  
        <li v-for="mail in mails" :key="mail.id" > 
                <mail-preview :mail="mail"  @remove="removeMail" @read="setCount"  @unRemove="unRemoveMail" /> 
            </li>
     </TransitionGroup>


    `,
    components: {
        mailPreview,
    },
    data(){
        return{
        }
    },
    
    methods: {
        select(mail) {
            this.$emit('selected', mail);
        },
        removeMail(id){
            this.$emit('remove', id)

        },
        unRemoveMail(id){
            this.$emit('unRemove', id)

        },
        setCount(){
            this.$emit('read')
        }
    },
    computed: {
    },
};

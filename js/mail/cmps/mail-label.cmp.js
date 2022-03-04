
export default {
    template: `
       <div class="side-bar">
       <router-link to="/mail-app/edit" >
            <label class= "send">
            📤
            </label>
            </router-link>
        <section class="filter">
            <button @click="setFilter('inbox')"> inbox </button>
            <button @click="setFilter('starred')" > starred </button>
            <button @click="setFilter('sent')" > sent </button>
            <button @click="setFilter('Draft')" >  Drafts </button>
            <button @click="setFilter('Trash')" > Trash </button>
         </section>
      </div> 
      
    `,
    data(){
    return {
        filterBy: 'inbox',
    }
},
    methods: {
        setFilter(filter){
            this.filterBy= filter
                this.$emit('choose',this.filterBy)
            },
    
      
    },
    computed: {
       
    },
};
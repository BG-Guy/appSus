
export default {
    template: `
          <label class="filter">
            <input type="text" v-model="filterBy"  @input="setFilter"  placeholder="Search mail" />
         </label>
      
    `,
    data(){
    return {
        filterBy:null,
    }
},
    methods: {
    
      
        setFilter(){
                this.$emit('filtered',this.filterBy.slice())
            },
    },
    computed: {
    },
};


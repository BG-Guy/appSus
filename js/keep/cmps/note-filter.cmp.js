export default {
    props:['notes'],
    template: `
        <section class="car-filter">
                Search
                <input type="text"
                    @input="setFilter" 
                    v-model="filterBy" 
                    placeholder="Search">

                <i class="filter-btn" @click="setFilterBy('noteTodos')">Todos Note</i>
                <i class="filter-btn" @click="setFilterBy('noteImg')">Image Note</i>
                <i class="filter-btn" @click="setFilterBy('noteVideo')">Video Note</i>
                <i class="filter-btn" @click="setFilterBy('noteText')">Text Note</i>
        </section>
    `,

    data() {
        return {
            filterBy: null,
            type: null,
        }
    },

    created() {

    },

    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy.slice());
            

        },
       
        setFilterBy(type) {
            this.$emit('filterType', type)
        }
    
 },

    computed: {

    },
    
}

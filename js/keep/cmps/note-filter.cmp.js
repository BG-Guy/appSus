export default {
    props:['notes'],
    template: `
        <section class="note-filter space-around">
                <div class="filter-input">
                    <input type="text"
                        @input="setFilter" 
                        v-model="filterBy" 
                        placeholder="Search">

                </div>
                <div class="filter-btns">
                    <i class="filter-btn" @click="setFilterBy('noteTodos')">Todos Note</i>
                    <i class="filter-btn" @click="setFilterBy('noteImg')">Image Note</i>
                    <i class="filter-btn" @click="setFilterBy('noteVideo')">Video Note</i>
                    <i class="filter-btn" @click="setFilterBy('noteText')">Text Note</i>

                </div>
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
            this.$emit('filtered', this.filterBy);
            

        },
       
        setFilterBy(type) {
            this.$emit('filterType', type)
        }
    
 },

    computed: {

    },
    
}

export default {
    props:['notes'],
    template: `
        <section class="car-filter">
            <label>
                Search
                <input ref="vendorInput" 
                    @input="filterNotes" 
                    type="text" 
                    v-model="filterBy" 
                    placeholder="Magic Search"
                />
            </label>
        </section>
    `,

    data() {
        return {
            filterBy: null,
        }
    },

    created() {

    },

    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy });

        },
        filterNotes() {
           
    },
    
 },

    computed: {

    },
    
}

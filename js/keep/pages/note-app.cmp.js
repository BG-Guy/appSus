import { noteService } from '../../keep/services/note.service.js'
import noteList from '../pages/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js';
import { showErrorMsg, showSuccessMsg } from '../../services/eventBus-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
    template: `
        <section v-if="notes">
            <div class="note-app-controller">
                <note-filter @filtered="setFilter" @filterType="setTypeFilter" ></note-filter>
                <note-add @addNote="updateNotes" ></note-add>

            </div>
            <note-list @remove="removeNote" :notes="noteForDisplay" />
        </section>
    `,

    components: {
        noteList,
        noteAdd,
        noteFilter,
    },

    data() {
        return {
            notes: null,
            filterByType: null,
            filterBy:null,

        };
    },

    created() {
        noteService.query().then(notes => {
            this.notes = notes
            
        });
        
    },

    methods:{
       updateNotes(note) {
           console.log(note);
           noteService.save(note).then(note => {
            this.notes.push(note)

           })
       },
       removeNote(id) {
        noteService.remove(id)
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === id);
                this.notes.splice(idx, 1);
                showSuccessMsg('Deleted succesfully');
            })
            .catch(err => {
                console.error(err);
                showErrorMsg('Error - please try again later')
            });
          
    },

    setTypeFilter(type) {
        this.filterByType = type
    },

    setFilter(type) {
        this.filterBy = type
        console.log(this.filterBy);
    }
        
    },
    computed:{
        noteForDisplay() {
            const regex = new RegExp(this.filterBy, "i");
            if (!this.filterBy && !this.filterByType) return this.notes
            if (this.filterBy ) return this.notes.filter((note) => regex.test(note.title))
            if (this.filterByType ) return this.notes.filter((note) => note.type === this.filterByType)
        
    }
}

}
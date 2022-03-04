import { noteService } from '../../keep/services/note.service.js'
import noteList from '../pages/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js';
import { showErrorMsg, showSuccessMsg } from '../../services/eventBus-service.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
    template: `
        <section v-if="notes">
            <note-filter @filtered="setFilter" ></note-filter>
            <note-add @addNote="updateNotes" ></note-add>
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
            filterByTxt: null,

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

    setFilter(type) {
        
        this.filterBy = type
        console.log(this.filterBy);
    }
        
    },
    computed:{
        noteForDisplay() {
            if (!this.filterBy) return this.notes
            let res = this.notes.filter((note) => note.type === this.filterBy)
            if (res) return res
            const regex = new RegExp(this.filterBy, 'i');
            return this.notes.filter(note => regex.test(note.info.txt));

        }
        
    },
}
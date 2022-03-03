import { noteService } from '../../keep/services/note.service.js'
import noteList from '../pages/note-list.cmp.js'
import noteAdd from '../cmps/note-add.cmp.js';

export default {
    template: `
        <section v-if="notes">
            <note-add @addNote="updateNotes" ></note-add>
            <note-list :notes="noteForDisplay" />
        </section>
    `,

    components: {
        noteList,
        noteAdd,
    },

    data() {
        return {
            notes: null,
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
       }
        
    },
    computed:{
        noteForDisplay() {
            if (!this.filterBy) return this.notes
        }
        
    },
}
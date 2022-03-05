import { noteService } from '../services/note.service.js';
import notePreview from '../cmps/note-preview.cmp.js';

export default {
    template: `
        <section class="notes-list-container" >
            <router-link to="/keep-app">Back to notes</router-link>
            <note-preview :note="note" class="note-details" :style="{backgroundColor: note.bgc}"></note-preview>
        </section>
    `,

    data() {
        return {
            note: null,
        }
    },

   components: {
       notePreview
   },

    created() {
        const id = this.$route.params.noteId;
        console.log(id);
        noteService.get(id)
            .then(note => this.note = note);
    },


    methods: {

    },

    computed: {

    },
    
}
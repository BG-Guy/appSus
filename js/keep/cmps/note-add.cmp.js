import { utilService } from '../../services/util-service.js';
import { storageService } from '../../services/storage-service.js';
import { noteService } from '../services/note.service.js';
export default {
    template: `
        <section class="note-add" >
            <div class="note-types" >
                <button @click="selectNoteType('noteTodos')">Todos Note</button>
                <button @click="selectNoteType('noteText')">Text Note</button>
                <button @click="selectNoteType('noteImg')">Img Note</button>
                <button @click="selectNoteType('noteVideo')">Video Note</button>
            </div>
            <input type="text" v-model="txt" :placeholder="noteTypeMsg" >
            <button @click="addNote()" >Add Note</button>
        </section>
        `,

    data() {
        return {
            noteTypeMsg: 'Select Note Type',
            note: null,
            txt: null,
            noteType: null,


        }

    },
    created() {},
    methods: {
        addNote() {
            var info
            console.log(this.noteType, this.txt);
            if (!this.noteType || !this.txt) return
            if (this.noteType === 'noteTodos') info = {label: "Enter A Todo", todos: [{txt: this.txt, isDone: false}], color: 'black'}
            if (this.noteType === 'noteImg') info = {url: this.txt, title: 'My Img'}
            if (this.noteType === 'noteVideo') info = {url: this.txt}
            if (this.noteType === 'noteText') info = {txt: this.txt, label: "Enter A Quick Note", color: 'black'}
            console.log(info);

            this.note = noteService.createNote(this.noteType, 'lightblue', info)
            this.$emit('addNote', this.note)
        },

        selectNoteType(msg) {
            
            if (msg === 'noteTodos')  this.noteTypeMsg = 'Enter A Quick Todo'
            if (msg === 'noteImg')  this.noteTypeMsg = 'Insert Img URL'
            if (msg === 'noteVideo')  this.noteTypeMsg = 'Insert YouTube URL'
            if (msg === 'noteText') this.noteTypeMsg = "Enter A Quick Note"
            this.noteType = msg
        }

        
    },
    computed: {
        getNoteInfo() {

        }
    },

    components: {
        utilService,
        storageService,
        noteService,
    },

}
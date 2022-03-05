import { utilService } from '../../services/util-service.js';
import { storageService } from '../../services/storage-service.js';
import { noteService } from '../services/note.service.js';
export default {
    template: `
        <section class="note-add column" >
            <div class="note-types align-center" >
                <button class="todos-note icon" @click="selectNoteType('noteTodos')">Todos Note</button>
                <button class="text-note icon" @click="selectNoteType('noteText')">Text Note</button>
                <button class="img-note icon" @click="selectNoteType('noteImg')">Img Note</button>
                <button class="video-note icon" @click="selectNoteType('noteVideo')">Video Note</button>
                <button class="audio-note icon" @click="selectNoteType('noteAudio')">Audio Note</button>

            </div>
            <div class="add-note-inputfield align-center">
                <input type="text" v-model="txt" :placeholder="noteTypeMsg" >
                <button class="add-note icon" @click="addNote()" >Add Note</button>
                
                
            </div>
         

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
            // console.log(this.noteType, this.txt);
            if (!this.noteType || !this.txt) return
            if (this.noteType === 'noteTodos') info = {todos: [{txt: this.txt, isDone: false, importance: 4}], color: 'black'}
            if (this.noteType === 'noteImg') info = {url: this.txt}
            if (this.noteType === 'noteVideo') info = {url: this.txt}
            if (this.noteType === 'noteText') info = {txt: this.txt}

            this.note = noteService.createNote(this.noteType,this.txt, '#F2F3F4', info)
            this.$emit('addNote', this.note)
        },

        selectNoteType(msg) {
            
            if (msg === 'noteTodos')  this.noteTypeMsg = 'Enter Todos Title'
            if (msg === 'noteImg')  this.noteTypeMsg = 'Insert Img URL'
            if (msg === 'noteVideo')  this.noteTypeMsg = 'Insert YouTube URL'
            if (msg === 'noteText') this.noteTypeMsg = "Enter A Quick Note"
            this.noteType = msg
            
        },

        
    },
    computed: {
        
    },

    components: {
        utilService,
        storageService,
        noteService,
    },

}
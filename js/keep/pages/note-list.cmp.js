import notePreview from '../cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="notes-list-container" >
            <ul class="notes-list wrap space-around ">
                <li v-for="note in notes" :key="note.id" :style="setBgc(note)" :style="setPin(note)" class="note" >
                    <div class="actions">
                            <router-link :to="'/keep-app/'+note.id">Enter Full Screen</router-link>
                           <i class="close-btn" @click="remove(note.id)">☒</i>
                           <i class="color-btn yellow" @click="onSetBgc(note, '#F7DC6F')"></i>
                           <i class="color-btn red" @click="onSetBgc(note, '#E74C3C')" ></i>
                           <i class="color-btn purple" @click="onSetBgc(note, '#A569BD')" ></i>
                           <i class="color-btn green" @click="onSetBgc(note, '#52BE80')" ></i>
                           <i class="color-btn blue" @click="onSetBgc(note, '#5DADE2')" ></i>
                           <i class="color-btn grey" @click="onSetBgc(note, '#D7DBDD')" ></i>
                    </div>
                    <note-preview :note="note" ></note-preview>
                    <div class="actions-two">
                        <i @click="onSetPin(note)"  >PIN NOTE</i>
                    </div>
                </li>
            </ul>
        </section>
    `,

    data() {
        return {
            
        }
    },

    components: {
        notePreview,
    },

    created() {

    },

    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        onSetBgc(note, color) {
            note.bgc = color

        },

        setBgc(note) {
            return {'background-color': note.bgc}
        },
        setPin(note) {
            if (note.isPinned) return {
                'order': 1
            
            }
        },

        onSetPin(note) {
            note.isPinned = !note.isPinned
            
        }
       
    },

    computed: {

    },
    
}
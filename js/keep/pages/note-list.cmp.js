import notePreview from '../cmps/note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="notes-list-container" >
            <ul class="notes-list wrap space-around ">
                <li v-for="note in notes" :key="note.id" class="note" >
                    <div class="actions">
                            <router-link :to="'/keep-app/'+note.id">Enter Full Screen</router-link>
                           <i class="close-btn" @click="remove(note.id)">☒</i>
                    </div>
                    <note-preview :note="note" ></note-preview>
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

    },

    computed: {

    },
    
}
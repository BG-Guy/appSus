import noteText from './note-text.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteAudio from './note-audio.cmp.js'

export default {
  props: ['note'],
  template: `
        
        <component  :is="note.type" :note="note"></component>
              
              `,
                    
        components: {
            noteText,
            noteImg,
            noteVideo,
            noteTodos,
            noteAudio
        },
        data() {
            return {};
        },

        methods: {},
        computed: {},
        };

import noteText from './note-text.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default {
  props: ['note'],
  template: `
          {{note.type}}
        <component  :is="note.type" :note="note"></component>
              
              `,
                    
        components: {
            noteText,
            noteImg,
            noteVideo,
            noteTodos
        },
        data() {
            return {};
        },

        methods: {},
        computed: {},
        };

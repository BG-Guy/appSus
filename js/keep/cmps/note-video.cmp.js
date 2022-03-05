export default {
    props: ['note'],
    template: `
        <section >
            <p class="note-title">{{note.title}}</p>
            
        <iframe class="video-frame" width="90%" height="90%"
            :src="getVideoUrl">
            </iframe>
        </section>
    `,

    components: {},
    created() {
        console.log('note-video.cmp');
    },
    data() {
        return {
            
        };
    },

    methods: {},
    computed: {
        getVideoUrl() {
            return 'https://www.youtube.com/embed/' + this.note.info.url.split('=')[1]
        }
    },
    
}
export default {
    props: ['note'],
    template: `
        <section >
        <iframe class="video-frame" width="90%" height="90%"
            src="https://www.youtube.com/embed/CJbR7K0E2Z4">
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
    computed: {},
    
}
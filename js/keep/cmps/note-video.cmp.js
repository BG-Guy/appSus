export default {
    props: ['note'],
    template: `
        <section class="note note-img">
        <iframe width="400" height="200px"
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
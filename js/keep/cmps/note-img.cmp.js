export default {
    props: ['note'],
    template: `
        <section class="note note-img">
            <p>{{ note.info.title }}</p>
            <img :src="note.info.url" />
        </section>
    `,

    components: {},
    created() {
        console.log('note-img.cmp');
    },
    data() {
        return {};
    },

    methods: {},
    computed: {},
    
}
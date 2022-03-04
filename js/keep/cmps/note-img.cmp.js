export default {
    props: ['note'],
    template: `

            <p>{{ note.info.txt }}</p>
            <img :src="note.info.url" />

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
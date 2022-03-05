export default {
    props: ['note'],
    template: `

            <p class="note-title">{{ note.title }}</p>
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
export default {
    props: ["note"],
    template: `
        <section   >
            <p contenteditable="true" >{{ txt }}</p>
        </section>
    `,

    data() {
        return {
            txt: null,
        }
    },

    methods: {
    
    },

    created() {
        this.txt = this.note.title
    }
}
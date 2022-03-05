export default {
    props: ["note"],
    template: `
        <section   >
            <p class="note-title" contenteditable="true" >{{ title }}</p>
            <p>{{ txt }}</p>
        </section>
    `,

    data() {
        return {
            title: null,
            txt: null,
        }
    },

    methods: {
    
    },

    created() {
        this.txt = this.note.info.txt
        this.title = this.note.title
    }
}
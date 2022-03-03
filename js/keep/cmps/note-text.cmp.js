export default {
    props: ["note"],
    template: `
        <section class="note"  >
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
        this.txt = this.note.info.txt
    }
}
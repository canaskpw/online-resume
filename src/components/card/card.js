

export default{
    props: {
        title: String,
        imgsrc: String,
        intro: Object,
        previewLink: String,
        isQRCode: Boolean,
    },
    computed: {
        keywords(){
            // return this.intro === undefined? '': this.intro.keywords
            return this.intro.keywords
        },
        description(){
            return this.intro.description
            // return this.intro === undefined?'': this.intro.description
        },
    },
    components: {
        
    },
}



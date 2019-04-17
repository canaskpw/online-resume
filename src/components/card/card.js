

export default{
    props: {
        title: String,
        imgsrc: String,
        intro: Object,
    },
    computed: {
        keywords(){
            return this.intro === undefined? '': this.intro.keywords
        },
        description(){
            return this.intro === undefined?'': this.intro.description
        },
    }
}



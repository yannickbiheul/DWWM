new Vue({
    el: "#app",
    data: {
        titre: "Hello World !",
        paragraphe: "Un essai de Vue.js",
        seen: false,
        strongTag: "<strong>IMPORTANT</strong>"
    },
    methods: {
        maFonction: function() {
            this.titre = this.titre + " ça va ?"
        }
    }
})
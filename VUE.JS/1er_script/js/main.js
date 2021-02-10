new Vue({
    el: "#app",
    data: {
        titre: "Hello World !",
        paragraphe: "Un essai de Vue.js",
        seen: false,
        strongTag: "<strong>IMPORTANT</strong>",
        date: "Nous sommes le " + new Date().toLocaleString(),
        compteur: 0,
        tagName: "rien"
    },
    computed: {
        wordComputed: function() {
            return this.compteur < 0 ? "Négatif" : "Positif"
        }
    },
    methods: {
        maFonction: function() {
            this.titre = this.titre + " ça va ?"
        },
        increment: function() {
            this.compteur++
        },
        decrement: function() {
            this.compteur--;
        },
        hover: function(event) {
            this.tagName = event.target.tagName
        }
    }
})

new Vue({
    el: "#app2",
    data: {
        titre: "Section 2",
        isBlue: false,
        myText: "Bonjour les gens ça va ?"
    },
    filters: {
        firstWord: function(value) {
            return value.split(' ')[0]
        },
        majuscules: function(value) {
            return value.toUpperCase();
        }
    }
})
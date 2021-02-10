                                        /* ----- COMPOSANT TODO-ITEM ----- */

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

                                        /* ----- COMPOSANT MYCOMPONENT ----- */

Vue.component('mycomponent', {
    data: function() {
        return {
            title: "Mon Composant !"
        }
    },
    template: '<h1>{{title}}</h1>'
})

                                        /* ----- COMPOSANT ESSAIPROP ----- */

Vue.component('essaiprop', {
    props: ['title', 'mytext'],
    template: '<h3 v-on:click="clickTest">{{title}}</h3>',
    methods: {
        clickTest: function() {
            console.log(this.myText);
        }
    }
})

                                        /* ----- COMPOSANT NEWCOMPONENT ----- */

Vue.component('newcomponent', {
    props: ['montitre', 'mytext'],
    template: '<h3 v-on:click="clickTest">{{montitre}}</h3>',
    methods: {
        clickTest: function () {
            console.log(this.mytext);
        }
    }
})

Vue.component('uneboucle', {
    props: ['montitre', 'mytext'],
    template: '<h3 v-on:click="clickTest">{{montitre}}</h3>',
    methods: {
        clickTest: function () {
            console.log(this.mytext);
        }
    }
})

                                                            /* ----- SECTION 1 ----- */

new Vue({
    el: "#app",
    data: {
        titre: "Hello World !",
        paragraphe: "Un essai de Vue.js",
        seen: false,
        strongTag: "<strong>IMPORTANT</strong>",
        date: "Nous sommes le " + new Date().toLocaleString(),
    },
    methods: {
        maFonction: function() {
            this.titre = this.titre + " ça va ?"
        }
    }
})

                                                            /* ----- SECTION 2 ----- */

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

                                                            /* ----- SECTION 3 ----- */

new Vue({
    el: "#app3",
    data: {
        todos: [
            { text: "Premier texte" },
            { text: "Deuxième texte" },
            { text: "Troisième texte" }
        ],
        message: "",
        groceryList: [
            { id: 0, text:"Légumes"},
            { id: 1, text: "Fruits" },
            { id: 2, text: "Fromage" },
            { id: 3, text: "Bières" }
        ]
    }
})

                                                            /* ----- SECTION 4 ----- */

new Vue({
    el: "#app4",
    data: {
        compteur: 0,
        tagName: "rien"
    },
    computed: {
        wordComputed: function () {
            return this.compteur < 0 ? "Négatif" : "Positif"
        }
    },
    methods: {
        increment: function () {
            this.compteur++
        },
        decrement: function () {
            this.compteur--;
        },
        hover: function (event) {
            this.tagName = event.target.tagName
        }
    }
})

                                                            /* ----- SECTION 5 ----- */

new Vue({
    el: "#app5",
    data: {
        titleData: "Hello from data",
        titresData: ['Texte 1', 'Texte 2', 'Texte 3', 'Texte 4', 'Texte 5', 'Texte 6']
    },
    methods: {
        clickTest: function() {
            this.titleData = "eh ben je change !"
        }
    }
})
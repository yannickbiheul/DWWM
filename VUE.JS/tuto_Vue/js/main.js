// Composants todo-item
Vue.component('todo-item', {
    // Le composant todo-item accepte une
    // « prop » qui est comme un attribut personnalisé.
    // Cette prop est appelée todo.
    props: ['todo'],
    template: "<li>{{todo.text}}</li>"
})

// Hello Vue
var app1 = new Vue({
    el: "#app1",
    data: {
        message: 'Hello Vue !'
    }
})

// Chgt title + Affichage date
var app2 = new Vue({
    el: "#app2",
    data: {
        message: "Vous avez affiché cette page le : " + new Date().toLocaleString()
    }
})

// Conditions et boucles
var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true,
        todos: [
            {text: "Apprendre JavaScript"},
            {text: "Apprendre Vue"},
            {text: "Créer quelque chose de génial"}
        ]
    }
})

// Écouteurs d'événements
var app4 = new Vue({
    el: "#app4",
    data: {
        message: "Retourner un message"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// Data binding
var app5 = new Vue({
    el: "#app5",
    data: {
        message: ""
    }
})

// Composants
var app6 = new Vue({
    el: "#app6",
    data: {
        groceryList: [
            {id: 0, text: "Légumes"},
            { id: 1, text: "Fruits" },
            { id: 2, text: "Fromages" },
            { id: 3, text: "Bières" }
        ]
    }
})
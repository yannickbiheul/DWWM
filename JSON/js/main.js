var jsonEmployes = `[ 
    { "hommes":[
        { "nom_produit":"short homme"     , "prix":25.00, "photo": "img1.jpg" },
        { "nom_produit":"pantalon homme" , "prix":28.00, "photo": "imgA.jpg" },
        { "nom_produit":"t-shirt homme"  , "prix":35.00, "photo": "img22.jpg" },
        { "nom_produit":"chaussurehomme", "prix":15.00, "photo": "img59.jpg" }
      ]},
    { "femmes":[
        { "nom_produit":"robe femme" , "prix":25.00, "photo": "fimg1.jpg" },
        { "nom_produit":"pantalon femme" , "prix":28.00, "photo": "fimgA.jpg" },
        { "nom_produit":"t-shirt femme"  , "prix":35.00, "photo": "fimg22.jpg" },
        { "nom_produit":"chaussure femme", "prix":15.00, "photo": "fimg59.jpg" }
      ]},
      { "enfants":[
        { "nom_produit":"robe enfant" , "prix":25.00, "photo": "eimg1.jpg" },
        { "nom_produit":"pantalon enfant" , "prix":28.00, "photo": "fimgA.jpg" },
        { "nom_produit":"t-shirt enfant"  , "prix":35.00, "photo": "fimg22.jpg" },
        { "nom_produit":"chaussure enfant", "prix":15.00, "photo": "fimg59.jpg" }
      ]}  
]`;

let objEmployes = JSON.parse(jsonEmployes);
console.log(objEmployes);

// console.log(objEmployes[0]);


let keys = Object.keys(objEmployes);
// console.log(keys);
let values = Object.values(objEmployes);
// console.log(values);


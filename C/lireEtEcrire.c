#include <stdio.h>
#include "fonctions.c"

int main(void) {

    // Lire et écrire un nombre
    int ageUtilisateur = 0;
    printf("Entrez votre age :\n");
    scanf("%d", &ageUtilisateur); // On attend un entier ("%d"), et on l'entre dans l'adresse de la variable.
    // // "&ageUtilisateur" représente l'adresse de la variable "ageUtilisateur"
    // // A utiliser pour le scanf de nombres (int et float)
    printf("Vous avez %d ans.\n", ageUtilisateur);

    // Lire et écrire une chaine de caractères
    char lettre = 'A';
    printf("Entrez une lettre :\n");
    scanf(" %c", &lettre);  // Mettre un espace pour éviter la prise en compte du retour chariot
    printf("Vous avez choisi la lettre %c\n", lettre);

    
    return 0;
}
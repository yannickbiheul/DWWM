#include <stdio.h>
#include "fonctions.c"  // Inclure les fonctions

/* Déclarer des variables */

int main(void) {

    // Déclaration et affectation de variables de type entier (int) et flottants (float)
    // Les variables sont stockées dans la mémoire vive.
    int aireDuCarre = 0;
    float nombre = 124.23;
    int nombreEntier = (int)nombre; // Convertir un float en int
    int autreNombre = 16;
    const float PI = 3.14;  // La variable devient constante
    // La norme veut qu'on déclare les constantes en majuscules
    /* Le nom des variables n'affectent pas la mémoire :
    Pour déclarer l'age d'un utilisateur, préferer "int ageUtilisateur" à "int age".
    */

    /* REGISTRE (processeur) */
    register int unNombre = 5;  // Enregistre la variable dans le registre (processeur) (plus rapide, mais moins de place), elle devient prioritaire
    volatile int unAutreNombre = 10;    // Cette variable ne passera jamais dans le registre
    // Les périphériques n'intéragissent pas avec les variables stockées dans le registre


    // Afficher les variables
    /*
    Pour afficher le contenu d'une variable :
        %d : nombre entier (int)
        %f : nombre flottant (float)
        %c : caractère (char)
        %s : chaines de caractères (texte)
    */
    printf("Le nombre entier est : %d et l'autre nombre est : %d.\n", nombreEntier, autreNombre);
    printf("Le prix est de %.2f euros.\n", nombre); // .2 pour afficher 2 chiffres après la virgule
    printf("PI = %.2f\n", PI);

    return 0;
}
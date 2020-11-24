#define TAILLE 3
#include <stdio.h>
#include "fonctions.h"

/* TABLEAUX */

// int main() {

//     // Créer tableau
//     int tab[1];
//     creerTableau(tab, 5);

//     // Afficher tableau
//     afficherTableau(tab, 5);

//     // Afficher le minimum
//     minimum(tab, 5);

//     // Afficher le maximum
//     maximum(tab, 5);

//     // Calculer la moyenne
//     moyenne(tab, 5);

//     // Multiplier par 2
//     par2(tab, 5);


//     return 0;
// }


// TABLEAUX 2 DIMENSIONS

// int main()
// {
//     int t[TAILLE][TAILLE];

//     // Remplir le tableau
//     int i, j;
//     for (i = 0; i < TAILLE; i++)
//     {
//         for (j = 0; j < TAILLE; j++)
//         {
//             t[i][j] = (i + 1) * (j + 1);
//         }
//     }

//     // Afficher le tableau
//     for (i = 0; i < TAILLE; i++)
//     {
//         for (j = 0; j < TAILLE; j++)
//         {
//             printf("%2d ", t[i][j]);
//         }
//         printf("\n");
//     }
// }



int main(void) {

    int tab[TAILLE][TAILLE];

    // Remplir le tableau
    for (int i = 0; i < TAILLE; i++){
        for (int j = 0; j < TAILLE; j++) {
            switch(i) {
                case 0:
                    tab[i][j] = j + 1;
                    break;
                case 1:
                    tab[i][j] = j + 8;
                    if (tab[i][j] == 10) {
                        tab[i][j] = 4;
                    }
                    break;
                case 2:
                    tab[i][j] = j + 7;
                    if (tab[i][j] == 8) {
                        tab[i][j] = 6;
                    } else if (tab[i][j] == 9) {
                        tab[i][j] = 5;
                    }
                    break;
            }
        }
    }

    // Afficher le tableau
    for (int i = 0; i < TAILLE; i++) {
        for (int j = 0; j < TAILLE; j++) {
            printf("%2d ", tab[i][j]);
        }
        printf("\n");
    }

    return 0;
}
#define TAILLE 10
#include <stdio.h>
#include "fonctions.c"



int main(void) {

    int tab[TAILLE];
    // int tmp;

    // Remplir tableau
    for (int i = 0; i < TAILLE; i++) {
        printf("Entre un nombre : \n");
        scanf("%d", &tab[i]);
    }

    // Afficher tableau
    for (int i = 0; i < TAILLE; i++) {
        printf("%d | ", tab[i]);
    }

    // Trier le tableau
    // for (int j = 0; j < TAILLE; j++) {
    //    for (int i = 0; i < TAILLE; i++) {
    //         while (tab[i] > tab[i + 1]) {
    //             tmp = tab[i];
    //             tab[i] = tab[i + 1];
    //             tab[i + 1] = tmp;
    //         }
    //     } 
    // }
    
    // for (int i = TAILLE; i >= 0; i--) {
    //     for (int j = 0; j < i-1; j++) {
    //         if (tab[j+1] < tab[j]) {
    //             tmp = tab[j];
    //             tab[j] = tab[j + 1];
    //             tab[j + 1] = tmp;
    //         }
    //     }
    // }

    trier(tab, TAILLE);

    printf("\n");

    for (int i = 0; i < TAILLE; i++) {
        printf("%d | ", tab[i]);
    }

    return 0;
}

/*
    Soit un tableau T
    Pour i allant de T.length à 1
    Pour j allant de 0 à i-1
    Si T[j+1] < T[j]
    Alors permuter [j+1] et [j]
*/




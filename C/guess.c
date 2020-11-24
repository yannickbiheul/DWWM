#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {

    int MAX = 100, MIN = 1;
    srand(time(NULL));
    int nombre = (rand() % (MAX - MIN + 1)) + MIN;
    int choixMode = 0;
    char prenom[100];
    int choixDifficulte = 0;

    printf("\n***** Bienvenue sur Guess Number ! *****\n");
    printf("1- Mode 1 joueur\n");
    printf("2- Mode 2 joueurs\n");
    
    scanf("%d", &choixMode);
    if (choixMode == 1) {
        printf("***** 1 joueur *****\n");
        printf("Entrez votre prenom :\n");
        scanf(" %s", prenom);
        printf("Bienvenue, %s !\n", prenom);
        printf("Choisissez une difficulte :\n");
        printf("1- Facile (de 1 a 50)\n");
        printf("2- Normal (de 1 a 100)\n");
        printf("3- Difficile (de 1 a 500)\n");
        scanf("%d", choixDifficulte);
        switch (choixDifficulte) {
            case 1:
                MAX = 50;
                break;
            case 2:
                MAX = 100;
                break;
            case 3:
                MAX = 500;
                break;
            default:
                printf("Il faut taper un nombre entre 1 et 3, c'est dur a comprendre ca ?!\n");
                break;    
        }
    } else {
        printf("Pas encore disponible !\n");
    }
            
       
}
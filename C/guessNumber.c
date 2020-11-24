#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {

    const int MAX = 100, MIN = 1;
    char prenom[100];
    srand(time(NULL));
    int nombre = (rand() % (MAX - MIN + 1)) + MIN;
    int nombreJoueur;
    int essais = 10;

    printf("Quel est ton prenom ?\n");
    scanf("%s", prenom);
    printf("Salut %s !\nBienvenue dans Guess Number !\n", prenom);
    printf("Le principe est simple : je choisis un nombre au hasard entre 1 et 100, et tu dois le retrouver.\n");
    printf("Mais attention, tu n'as que 10 essais !\n");

    do {
        printf("\nEntre un nombre : \n");
        scanf("%d", &nombreJoueur);
        if (essais > 0) {
            if (nombreJoueur > nombre)
            {
                printf("***** C'est moins ! *****\n");
                essais--;
                printf("Il te reste %d essais.\n", essais);
            }
            else if (nombreJoueur < nombre)
            {
                printf("***** C'est plus ! *****\n");
                essais--;
                printf("Il te reste %d essais.\n", essais);
            }
            else
            {
                printf("***** Bravo %s, tu es vraiment tres intelligent ! *****\n", prenom);
            }
        } else {
            printf("Gros looser, tu n'as plus d'essais, c'est fini !\n");
            nombreJoueur = nombre;
            printf("Le bon nombre etait : %d\n", nombre);
        }
        
    } while (nombreJoueur != nombre);

    return 0;
}



// int main(void) {
//     int recommencer = 0;
//     int magic = 12, x;
//     printf("Tapez un nombre au hasard \n");
//     do {
//         scanf("%d", &x);
//         if (x < magic) {
//             printf("Trop petit bitch !\n");
//             recommencer++;
//         } else if (x > magic) {
//             printf("Trop grand bitch !\n");
//             recommencer++;
//         } else {
//             printf("Good job boy !\n");
//         }
//         printf("\nNombre d'essais = %d \n", recommencer);
//         if (recommencer >= 10) {
//             printf("Dommage ! Il fallait trouver 12 !\n");
//             x = 12;
//         }
//     } while (magic != x);


// }
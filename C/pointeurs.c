#include <stdio.h>
#include "fonctions.c"

/* Pointeur : variable contenant l'adresse d'une autre variable 

    [VARIABLES]
        maVariable : valeur de la variable
        &maVariable : adresse de la variable

    [POINTEURS]
        monPointeur : adresse de la variable pointée
        *monPointeur : valeur de la variable pointée
        &monPointeur : adresse du pointeur
*/

void permuter(int *a, int *b){
    int tmp = *a;
    *a = *b;
    *b = tmp;
}


int main(void) {

    int a = 5;
    int b = 10;

    printf("Avant : a = %d et b = %d\n", a, b);
    permuter(&a, &b);
    printf("Apres : a = %d et b = %d\n", a, b);

}
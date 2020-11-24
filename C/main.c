#include <stdio.h>
#include "fonctions.c"

int main() {
    
    int resultat, x, y;
    printf("Entrez le nombre 1 : \n");
    scanf("%d", &x);
    printf("Entrez le nombre 2 : \n");
    scanf("%d", &y);
    resultat = x + y;
    printf("Le resultat est : %d", resultat);

    return 0;
}

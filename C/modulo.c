#include <stdio.h>

int main(void) {

    int nombre;
    printf("Entrez un nombre entier : \n");
    scanf("%d", &nombre);
    if (nombre % 2 == 0) {
        printf("Votre nombre est pair.\n");
    } else {
        printf("Votre nombre est impair.\n");
    }

    return 0;
}
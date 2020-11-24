#define TAILLE 5
#include <stdio.h>

int main(void) {

    int a, b, tmp;
    printf("Entrez 2 nombres entiers : \n");
    scanf("%d%d", &a, &b);
    printf("Vos nombres : a = %d et b = %d.\n", a, b);
    tmp = a;
    a = b;
    b = tmp;
    printf("Permutation des nombres : a = %d et b = %d.\n", a, b);

    return 0;
}
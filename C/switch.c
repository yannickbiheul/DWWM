#include <stdio.h>

int main(void) {

    int choixMenu;
    printf("=== MENU ===\n1. Royal Cheese\n2. Mc Deluxe\n3. Mc Bacon\n4. Big Mac\n");
    printf("Votre choix ?\n");
    scanf("%d", &choixMenu);
    switch (choixMenu) {
        case 1:
            printf("Vous avez choisi le Royal Cheese.\n");
            break;
        case 2:
            printf("Vous avez choisi le Mc Deluxe.\n");
            break;
        case 3:
            printf("Vous avez choisi le Mc Bacon.\n");
            break;
        case 4:
            printf("Vous avez choisi le Big Mac.\n");
            break;
        default :
            printf("Je n'ai pas compris votre choix !\n");
            break;
    }

    return 0;
}
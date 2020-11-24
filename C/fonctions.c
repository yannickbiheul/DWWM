#define TAILLE 10

// FONCTION Créer tableau

void creerTableau(int *tableau, int taille)
{
    for (int i = 0; i < taille; i++)
    {
        printf("Entrez un nombre : \n");
        scanf("%d", &tableau[i]);
    }
}


// FONCTION Afficher tableau

void afficherTableau(int *tableau, int taille)
{
    for (int i = 0; i < taille; i++)
    {
        if (i == 0)
        {
            printf("| %d | ", tableau[i]);
        }
        else
        {
            printf("%d | ", tableau[i]);
        }
    }
}


// FONCTION Minimum

void minimum(int *tableau, int taille) {

    int mini = tableau[0];
    for (int i = 0; i < taille; i++){
        if (tableau[i] < mini) {
            mini = tableau[i];
        }
    }
    printf("\nLe plus petit nombre est : %d",mini);
}


// FONCTION Maximum

void maximum(int *tableau, int taille) {

    int maxi = tableau[0];
    for (int i = 0; i < taille; i++){
        if (tableau[i] > maxi) {
            maxi = tableau[i];
        }
    }
    printf("\nLe plus grand nombre est : %d",maxi);
}


// FONCTION Multiplier par 2
void par2(int *tableau, int taille) {

    for (int i = 0; i < taille; i++) {
        tableau[i]*= 2;
    }
    printf("Multiplications du tableau par 2 : \n");
    for (int i = 0; i < taille; i++)
    {
        if (i == 0)
        {
            printf("| %d | ", tableau[i]);
        }
        else
        {
            printf("%d | ", tableau[i]);
        }
    }
}


// FONCTION Moyenne

void moyenne(int *tableau, int taille) {

    int somme = 0; 
    int moy;
    for (int i = 0; i < taille; i++) {
        somme+= tableau[i];
    }
    moy = somme / 5;
    printf("\nLa moyenne est de : %d\n", moy);
}


// FONCTION Trier tableau
void trier(int *tab, int taille) {
    int tmp;
    for (int i = TAILLE; i >= 0; i--) {
        for (int j = 0; j < i-1; j++) {
            if (tab[j+1] < tab[j]) {
                tmp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = tmp;
            }
        }
    }
}
package porte;


public class Detecteur {

    // DATAS
    private Trappe trappe2;

    // MEHODES
    public Detecteur(Trappe uneTrappe) {
        this.trappe2 = uneTrappe;
    }

    public void detecter(boolean bool) {
        if (bool) {
            System.out.println("Détecteur => Détecté !");
            trappe2.ouvrir();
        } else {
            System.out.println("Qu'est-ce que... ?! Fous moi l'camp sale clébard !!!");
            trappe2.fermer();
        }
    }
}
    

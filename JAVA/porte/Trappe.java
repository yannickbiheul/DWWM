package porte;

public class Trappe {

    // DATAS
    private boolean ouverte;

    // METHODES
    public Trappe() {
        this.ouverte = false;
    }

    public void ouvrir() {
        System.out.println("Trappe => Ouverture de la trappe");
        this.ouverte = true;
    }

    public void fermer() {
        System.out.println("Trappe => Fermeture de la trappe");
        this.ouverte = false;
    }

    public boolean isOuverte() {
        return ouverte;
    }
}

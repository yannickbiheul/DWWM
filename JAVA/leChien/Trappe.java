package leChien;

public class Trappe {

    private boolean isOuverte = false;

    public void ouvrir() {
        System.out.println("Trappe => Ouverture.");
        isOuverte = true;
    }

    public void fermer() {
        System.out.println("Trappe => Fermeture.");
        isOuverte = false;
    }

    public boolean getOuverte() {
        return this.isOuverte;
    }

}


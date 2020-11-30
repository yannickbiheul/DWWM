package porte;

public class Trappe {
    
    private boolean ouverte;

    public Trappe() {
        this.ouverte = false;
    }

    public void ouvrir() {
        System.out.println("Trappe => La trappe s'ouvre'");
        ouverte = true;
    }

    public void fermer() {
        System.out.println("Trappe => La trappe se ferme");
        ouverte = false;
    }

    public boolean isOuverte() {
        return ouverte;
    }

}

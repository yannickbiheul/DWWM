package porte;
import java.util.Timer;
import java.util.TimerTask;

public class Detecteur {

    // DATAS
    private Trappe trappe;
    Chien leChien = new Chien();
    
    // METHODES
    // Constructeur
    // L'objet Trappe fait partie de télécommande
    public Detecteur(Trappe uneTrappe) {
        this.trappe = uneTrappe;
    }

    public void detecter() {
        System.out.println("Détecteur => Détecté !!!");
        if (leChien.aboie.equals("Wouaf !")) {
            if (trappe.isOuverte()) {
                trappe.fermer();
            } else {
                trappe.ouvrir();
                final Timer timer = new Timer();
                timer.schedule(new TimerTask() {
                    public void run() {
                        trappe.fermer();
                        timer.cancel();
                    }
                }, 10000);
            }
        }
        
    }
    
}

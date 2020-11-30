package porte;
import java.util.Timer;
import java.util.TimerTask;

public class Telecommande {

    // DATAS
    private Trappe trappe;
    
    // METHODES
    // Constructeur
    // L'objet Trappe fait partie de télécommande
    public Telecommande(Trappe uneTrappe) {
        this.trappe = uneTrappe;
    }

    public void presserBouton() {
        System.out.println("Télécommande => BIP !!! - Bouton pressé");
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

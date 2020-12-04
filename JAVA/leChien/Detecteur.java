package leChien;

import java.util.Timer;
import java.util.TimerTask;

public class Detecteur {

    Trappe laTrappe = new Trappe();

    public void detecter() {
        System.out.println("Détecteur => Détection");
        if (laTrappe.getOuverte()) {
            laTrappe.fermer();
        } else {
            laTrappe.ouvrir();
            final Timer timer = new Timer();
            timer.schedule(new TimerTask() {
                public void run() {
                    laTrappe.fermer();
                    timer.cancel();
                }
            }, 1000);
        }
    }
    
}

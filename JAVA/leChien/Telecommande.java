package leChien;

import java.util.Timer;
import java.util.TimerTask;

public class Telecommande {

    Trappe laTrappe = new Trappe();

    // public Telecommande(Trappe laTrappe) {
    //     this.laTrappe = laTrappe;
    // }

    public void appuyer() {
        System.out.println("Telecommande => Appuie.");
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
            }, 6000);
        }
    }
    
}

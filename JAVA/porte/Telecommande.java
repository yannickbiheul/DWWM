package porte;
import java.util.Timer;
import java.util.TimerTask;

public class Telecommande {
    // DATAS
    private Trappe trappe2;

    // MEHODES
    public Telecommande(Trappe uneTrappe) {
        this.trappe2 = uneTrappe;
    }

    public void presserBouton() {
        System.out.println("Télécommande => BIP Bouton pressé");
        if (trappe2.isOuverte()) {
            trappe2.fermer();
        } else {
            trappe2.ouvrir();
            final Timer timer = new Timer();
            timer.schedule(new TimerTask() {
                public void run() {
                    if (trappe2.isOuverte()) {
                        trappe2.fermer();
                        timer.cancel();
                    }
                }
            }, 10000);
        }
        
    }
}




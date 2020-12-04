package leChien;

import java.util.Timer;
import java.util.TimerTask;

public class Chien {


    boolean aTilPisser = false;
    Detecteur leDetecteur = new Detecteur();
    Trappe laTrappe = new Trappe();

    public void aboyer() {
        System.out.println("Chien => Aboie.");
        leDetecteur.detecter();
    }

    public void pisser() {
        final Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            public void run() {
                System.out.println("Chien => Pisse.");
                timer.cancel();
                finiPisser();
            }
        }, 2000);
    }

    public void finiPisser() {
        System.out.println("Chien => J'ai fini !");
        aboyer();
        aTilPisser = true;
    }

    public void rentrer() {
        System.out.println("Chien => Rentre.");
    }

    public void sortir() {
        System.out.println("Chien => Sort.");
    }
    
}

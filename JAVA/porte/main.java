package porte;
import java.util.Timer;
import java.util.TimerTask;

public class Main {

    public static void main(String[] args) {

        Trappe trappe = new Trappe();
        // Telecommande telec = new Telecommande(trappe);
        Detecteur detec = new Detecteur(trappe);
        Chien leChien = new Chien();

        leChien.gueule();
        detec.detecter();
        System.out.println("Main => Le chien sort");
        System.out.println("Main => Le chien pisse");
        final Timer timer2 = new Timer();
        timer2.schedule(new TimerTask() {
            public void run() {
                leChien.gueule();
                System.out.println("Main => Le chien rentre");
                timer2.cancel();
            }
        }, 6000);
    }
    
}

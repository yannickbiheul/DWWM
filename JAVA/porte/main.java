package porte;

public class main {
    public static void main(String[] args) {
        Trappe trappe = new Trappe();
        /*Telecommande telec = new Telecommande(trappe);*/
        Detecteur detec = new Detecteur(trappe);
        Chien monChien = new Chien(waf);
        Chien autreChien = new Chien2();

        autreChien.aboyer();
        detec.detecter();
        monChien.aboyer();
        detec.detecter();
        System.out.println("main => Le chien sort");
        
        System.out.println("main => Le chien pisse");
        System.out.println("main => Le chien veut rentrer");
        
        System.out.println("main => Le chien rentre");
    }
}


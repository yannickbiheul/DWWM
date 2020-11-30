package porte;

public class main {
    public static void main(String[] args) {
        Trappe trappe = new Trappe();
        Telecommande telec = new Telecommande(trappe);

        System.out.println("main => Wouaf !! Le chien veut sortir");
        telec.presserBouton();
        System.out.println("main => Le chien sort");
        telec.presserBouton();
        System.out.println("main => Le chien pisse");
        System.out.println("main => Le chien veut rentrer");
        telec.presserBouton();
        System.out.println("main => Le chien rentre");
    }
}


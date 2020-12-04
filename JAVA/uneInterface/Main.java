package uneInterface;

public class Main {

    public static void main(String[] args) {

        Bateau b1 = new Bateau();
        b1.masse = 60;
        Hydravion hydr1 = new Hydravion();

        Port brest = new Port();

        brest.accueilEngin(b1);
        brest.accueilEngin(hydr1);

    }
    
}

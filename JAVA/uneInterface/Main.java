package uneInterface;

public class Main {

    public static void main(String[] args) {

        Bateau b1 = new Bateau();
        b1.masse = 60;

        Port brest = new Port();

        brest.accueilEngin(b1);

    }
    
}

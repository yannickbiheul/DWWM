package uneInterface;

public class Bateau implements IAmarable {

    int masse;

    public Bateau() {
        System.out.println("Je suis un bateau.");
    }

    public int nbreCordes() {
        return masse / 10;
    }
    
}

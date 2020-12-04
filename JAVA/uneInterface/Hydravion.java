package uneInterface;

public class Hydravion implements IAmarable {

    int flotteurs;
    
    public Hydravion() {
        System.out.println("Je suis un hydravion.");
    }

    public int nbreCordes() {
        return flotteurs;
    } 
    
}

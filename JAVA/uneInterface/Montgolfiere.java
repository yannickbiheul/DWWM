package uneInterface;

public class Montgolfiere implements IAmarable {

    int surface;

    public Montgolfiere() {
        System.out.println("Je suis un montgolfiere");
    }

    public int nbreCordes() {
        return surface / 50;
    }
    
}

package Profs;

public class Specialite {

    static int compteur;
    int id;
    String code;

    Specialite(String code) {
        this.id = incr();
        this.code = code;
    }
    
    public static int incr() {
        compteur++;
        return compteur;
    }

    public int getId() {
        return this.id;
    }

    public String getCode() {
        return this.code;
    }

    public String toString() {
        return "Spécialité " + this.getCode() + " : \n";
    }

}

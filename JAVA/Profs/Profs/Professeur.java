package Profs;

public class Professeur {

    static int compteur = 0;
    int id;
    String nom;
    String prenom;
    String telephone;
    String email;
    String specialite;

    Professeur(String n, String p, String e, String s) {
        this.id = incr();
        this.nom = n;
        this.prenom = p;
        this.email = e;
        this.specialite = s;
    }

    public static int incr() {
        compteur++;
        return compteur;
    }

    public int getId() {
        return this.id;
    }

    public String getNom() {
        return this.nom;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public String getTelephone() {
        return this.telephone;
    }

    public String getEmail() {
        return this.email;
    }

    public String getSpecialite() {
        return this.specialite;
    }

    public String toString() {
        return  "-" + this.getNom() + " " + this.getPrenom() + " " + this.getEmail();
    }

}
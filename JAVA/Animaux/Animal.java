package Animaux;

public class Animal {

    private String nom;

    public Animal() {
        
    }

    public Animal(String n) {
        this.nom = n;
    }

    public String getType() {
        if (this.nom == null) {
            return "Je suis un animal.";
        } else {
            return "Je suis un animal de nom " + this.nom + ".";
        }
    }

    public String getNom() {
        return this.nom;
    }

}
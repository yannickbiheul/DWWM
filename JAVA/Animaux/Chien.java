package Animaux;

public class Chien extends Mammifere {

    private int nbDePattes;

    public Chien(String n) {
        super(n);
    }

    @Override
    public String getType() {
        return super.getType() + " Je suis un chien.";
    }

    public int getPattes() {
        return this.nbDePattes;
    }

    public void aboyer() {
        System.out.println("Wouaf !");
    }
    
}

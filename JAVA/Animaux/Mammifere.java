package Animaux;

public class Mammifere extends Animal {

    private String pelage;

    public Mammifere() {
        
    }
    public Mammifere(String n) {
        super(n);
    }

    public String getPelage() {
        return this.pelage;
    }

    public void dormir() {
        System.out.println("ZZZzzz");
    }

    @Override
    public String getType() {
        return super.getType() + " Je suis un mammifère.";
    }
    
}

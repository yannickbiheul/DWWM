package porte;

public class Chien2 extends Chien {
    
    @Override
    public void aboyer() {
        System.out.println("Wouf !");
    }

    @Override
    public boolean vraiWaf() {
        return false;
    }

}

package Animaux;

public class Homme extends Mammifere {

    private String yeux;

    public Homme() {
        
    }

    public Homme(String n) {
        super(n);
    }

    @Override
    public String getType() {
        return super.getType() + " Je suis un homme.";
    }

    public String getYeux() {
        return this.yeux;
    }

    public void gueuler() {
        System.out.println("AAAAAAHHH !!!");
    }
    
}

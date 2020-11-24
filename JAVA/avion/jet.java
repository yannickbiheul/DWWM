package avion;

public class jet extends avion {
    
    @Override
    public void setVitesse(int pVitesse) {
        super.setVitesse(pVitesse * 2);
    }

    public void accelerer() {
        super.setVitesse(getVitesse() * 3);
    }
}

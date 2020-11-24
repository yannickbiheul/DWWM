package math;

public class math {

    public static int mini(int nbA, int nbB) {
        if (nbA < nbB) {
            return nbA;
        } else {
            return nbB;
        }
    }

    public int maxi(int nbA, int nbB) {
        if (nbA > nbB) {
            return nbA;
        } else {
            return nbB;
        }
    }

    public static void main(String[] args) {
        System.out.println(mini(4, 5));
    }
}

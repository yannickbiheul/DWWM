package avion;

public class testvol {

    public static void main(String[] args) {
        avion avion1 = new avion();

        avion1.setVitesse(200);
        System.out.println(avion1.getVitesse());

        jet jet1 = new jet();
        jet1.vitesse = 242;
        System.out.println(jet1.vitesse);

        jet jet2 = new jet();
        jet2.setVitesse(242);
        System.out.println(jet2.getVitesse());

    }
}

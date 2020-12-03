package Animaux;

public class TestAnimal {

    public static void main(String[] args) {

        Animal[] animaux = new Animal[5];
        animaux[0] = new Animal("Truc");
        animaux[1] = new Animal();
        animaux[2] = new Chien("Médor");
        animaux[3] = new Homme();
        animaux[4] = new Homme("Robert");
        for (int i = 0; i < animaux.length; i++) {
            System.out.println(animaux[i].getType());
        }
    }
    
}

package Articles;

public class Main {

    public static void main(String[] args) {

        Stylo stylo1 = new Stylo("B2", "Stylo bleu", "Bic", 6.54, "bleu");
        Ramette ramette1 = new Ramette("C129", "Ramette A4", "Canson", 2.45, "8.80g/m²");

        System.out.println("Prix du stylo 1 : " + stylo1.getPrix() + "€.");
        System.out.println("Prix de la ramette 1 : " + ramette1.getPrix() + "€.");
    }
    
}

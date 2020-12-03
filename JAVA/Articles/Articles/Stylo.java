package Articles;

public class Stylo extends ArticleUnitaire {

    String couleur;

    public Stylo(String r, String n, String m, double p, String c) {
        super(r, n, m, p);
        this.couleur = c;
    }

    public String getCouleur() {
        return this.couleur;
    }

    

}
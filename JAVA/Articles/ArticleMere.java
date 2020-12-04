package Articles;

public class ArticleMere {

    private String ref;
    private String nom;
    private String marque;
    private double prix;

    public ArticleMere(String r, String n, String m, double p) {
        this.ref = r;
        this.nom = n;
        this.marque = m;
        this.prix = p;
    }

    public String getRef() {
        return this.ref;
    }

    public String getNom() {
        return this.nom;
    }

    public String getMarque() {
        return this.marque;
    }

    public double getPrix() {
        return this.prix;
    }

    public void setRef(String r) {
        this.ref = r;
    }

    public void setNom(String n) {
        this.nom = n;
    }

    public void setMarque(String m) {
        this.marque = m;
    }

    public void setPrix(double p) {
        this.prix = p;
    }
    
}

package Articles;

public class Ramette extends ArticleUnitaire {

    String grammage;

    public Ramette(String r, String n, String m, double p, String g) {
        super(r, n, m, p);
        this.grammage = g;
    }

    public String getGrammage() {
        return this.grammage;
    }
    
}

package uneInterface;

public class Port {

    public void accueilEngin(IAmarable amarable) {
        int cordes = amarable.nbreCordes();
        System.out.println(cordes);
    }
    
}

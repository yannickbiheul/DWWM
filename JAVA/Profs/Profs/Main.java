package Profs;

public class Main {

    public static void main(String[] args) {

        // SPECIALITES
        Specialite[] specialites = {
            new Specialite("JAVA/JEE"),
            new Specialite(".net"),
            new Specialite("Gestion de projets"),
            new Specialite("CISCO"),
            new Specialite("PHP")
        };

        // PROFESSEURS
        Professeur[] profs = { 
            new Professeur("SAFI", "Amal", "safi@gmail.com", "JAVA/JEE"),
            new Professeur("RASHIDI", "Mohamed", "rashidi@gmail.com", "JAVA/JEE"),
            new Professeur("RAMI", "Amal", "rami@gmail.com", "CISCO"),
            new Professeur("SIMON", "Thomas", "simon@gmail.com", "CISCO") 
        };


        // 😱 1ère méthode : logique à revoir. 😱
        for (Specialite s : specialites) {
            System.out.println(s.getCode());
            if (s.getCode().equals(".net") || s.getCode().equals("Gestion de projets") || s.getCode().equals("PHP")) {
                System.out.println("Aucun professeur dans cette spécialité");
            } else {
                for (Professeur p : profs) {
                    if (p.getSpecialite().equals(s.getCode())) {
                        System.out.println(p.toString());
                    }
                }
            }
        }

    }
    
}

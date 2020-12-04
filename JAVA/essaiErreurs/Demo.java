package essaiErreurs;

public class Demo {
    public static void main(String[] args) {
        try {
            int[] num = {1, 2, 3, 4};
            System.out.println(num[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e);
        }
    }
}

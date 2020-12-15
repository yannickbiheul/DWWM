package mvc;

public class Main {

    public static void main(String[] args) {

        Student model = retriveStudentFromDataBase();

        StudentView view = new StudentView();

        StudentController controller = new StudentController(model, view);

        controller.updateView();

        controller.setStudentName("John");

        controller.updateView();

    }

    private static Student retriveStudentFromDataBase() {
        Student student = new Student();
        student.setName("Robert");
        student.setRollNo("10");
        return student;
    }
    
}

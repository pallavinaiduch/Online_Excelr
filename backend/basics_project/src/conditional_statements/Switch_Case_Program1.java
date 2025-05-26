package conditional_statements;
import java.util.Scanner;
public class Switch_Case_Program1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter a number");
		int key=sc.nextInt();
		switch (key) {
		case 1:System.out.println("case 1 is  executing");break;
		case 2:System.out.println("case 2 is  executing");break;
		default:System.out.println("default  is  executing");break;
			
		}

	}

}

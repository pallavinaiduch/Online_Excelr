package looping_statements;
import java.util.Scanner;
public class Menu_Program2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		boolean check=true;
		do {
			System.out.println("choose \n1.Mens Wear \n2.Womens Wear \n3.Kids Wear");
			int choice=sc.nextInt();
			switch (choice) {
			case 1:{
				System.out.println("Mens Wear");
			}	
				break;

			case 2:{
				System.out.println("Womens Wear");
			}	
				break;
			case 3:{
				System.out.println("kids Wear");
			}	
				break;
			default:
				break;
			}
		}while(check);

	}

}

package looping_statements;

import java.util.Scanner;

public class Menu_Program1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		boolean out=true;
		while(out) {
			System.out.println("1.idly \n.dosa \n.vada");
			String order=sc.next();
			
			switch (order) {
			case "idly":System.out.println("idly - 20$");break;
			case "vada":System.out.println("vada - 10$");break;
			case "dosa":System.out.println("dosa - 30$");break;
			case "puri":System.out.println("puri - 40$");break;
			case "bill":{
				System.out.println("your bill is : ....");
				out=false;
			}break;
			default:System.out.println("Not availble...");break;
			}
		}
		System.out.println("thanks visit again");
	}
}

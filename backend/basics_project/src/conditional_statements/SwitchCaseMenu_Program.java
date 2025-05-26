package conditional_statements;

import java.util.Scanner;

public class SwitchCaseMenu_Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		//System.out.println("1.idly \n.dosa \n.vada");
		String order=sc.next();
		
		switch (order) {
		case "idly":System.out.println("idly - 20$");break;
		case "vada":System.out.println("vada - 10$");break;
		case "dosa":System.out.println("dosa - 30$");break;
		case "puri":System.out.println("puri - 40$");break;
		case "bonda":System.out.println("bonda - 20$");break;
		case "bajji":System.out.println("bajji - 20$");break;


		default:System.out.println("Not availble...");break;
		}

	}

}

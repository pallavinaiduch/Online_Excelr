package conditional_statements;

import java.util.Scanner;

public class Switch_Case_Program2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter a day");
		int day=sc.nextInt();
		switch (day) {
		case 1:System.out.println("Sunday");break;
		case 2:System.out.println("Monday");break;
		case 3:System.out.println("Tuseday");break;
		case 4:System.out.println("Wedensday");break;
		case 5:System.out.println("Thursday");break;
		case 6:System.out.println("Friday");break;
		case 7:System.out.println("Satuarday");break;
		default:System.out.println("There is no day please enter proper day");break;
		}

	}

}

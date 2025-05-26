package conditional_statements;
import java.util.Scanner;
public class Leap_Year {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter a year");
		int year=sc.nextInt();
//		if(year % 4 == 0) {
//			if(year % 100 != 0) {
//			System.out.println(year + " is a leap year");
//		}
		
//		}
		if((year % 4==0 && year % 100 !=0 || year % 400 ==0)) {
			System.out.println(year + " is a leap year");
		}else {
			System.out.println(year + " is  not a leap year");
		}

	}

}

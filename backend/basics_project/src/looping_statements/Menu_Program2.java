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
				boolean mensCheck=true;
				do {
					System.out.println("Choose mens wear 1.shirt 2.pant 3.shoes 4 exit");
					int menschoice=sc.nextInt();
					switch(menschoice) {
					case 1:System.out.println("shirt");break;
					case 2:System.out.println("pant");break;
					case 3:System.out.println("shoes");break;
					case 4:mensCheck=false;break;

					}
				}while(mensCheck);
							
			}break;

			case 2:{
				boolean WomensCheck=true;
				do {
					System.out.println("Choose womens wear 1.shirt 2.pant 3.shoes 4 exit");
					int Womenschoice=sc.nextInt();
					switch(Womenschoice) {
					case 1:System.out.println("shirt");break;
					case 2:System.out.println("pant");break;
					case 3:System.out.println("shoes");break;
					case 4:WomensCheck=false;break;

					}
				}while(WomensCheck);			}	
				break;
			case 3:{
				boolean KidsCheck=true;
				do {
					System.out.println("Choose kids wear 1.shirt 2.pant 3.shoes 4 exit");
					int kidchoice=sc.nextInt();
					switch(kidchoice) {
					case 1:System.out.println("shirt");break;
					case 2:System.out.println("pant");break;
					case 3:System.out.println("shoes");break;
					case 4:KidsCheck=false;break;

					}
				}while(KidsCheck);			}	
				break;
			default:
				break;
			}
		}while(check);

	}

}

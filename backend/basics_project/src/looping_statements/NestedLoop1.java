package looping_statements;

public class NestedLoop1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int rows=5;
		int col=10;
		for(int i=1;i<=rows;i++) {
			for(int j=1;j<=col;j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
	}

}

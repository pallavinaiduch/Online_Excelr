package array_programs;

public class Array_Program3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String []colors= {"red","yellow","pink","orange","blue"};
		for(int i=0;i<colors.length;i++) {
			System.out.println(colors[i]);
		}
		
		System.out.println("================");
		for(String color:colors) {
			System.out.println(color);
		}

	}

}

package string_program;

public class FindAlphabets {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s="abcD123";
		char []arr=s.toCharArray();
		for(int i=0;i<arr.length;i++) {
			if((s.charAt(i)>='a' && s.charAt(i)<='z') || (s.charAt(i)>='A' && s.charAt(i)<='Z')) {
				System.out.println(s.charAt(i));
			}
		}

	}

}

package method_programs;

public class Program1 {

	public static void main(String[] args) {
		System.out.println("main method");
		m1();
		m2(10);//method calling statement
	}
//	no -args method
	public static void m1() { 
		System.out.println("m1 method");	
	}
//	args methods
	public static void m2(int a) {
		System.out.println("m2 method"+a);
		
	
	}
	
}
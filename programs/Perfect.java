public class Perfect {
    public static void main(String[] args) {
      for(int j=1;j<=100;j++){
        int n=j;
        int sum=0;
        for(int i=1;i<n;i++){
          if(n%i==0){
           sum+=i;
          }  
        }
        if(sum==n){
            System.out.println(n+" is a perfect number");
        }
        
    }
    }
}
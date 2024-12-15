public class Generics{
    static boolean isPrime(int num){
        int flag =0;
        for(int i = 2;i<num;i++)
            if(num%i==0)
            {
                flag = 1;
                break;
            }
        if(flag==0)
            return true;
        return false;
    }
    static <T> void count(String str,T[] element){
        int even=0,odd=0,prime=0,palin=0;
        if(str.equals("even")){
            for(T value:element)
                if(Integer.parseInt(value.toString())%2==0)
                    even++;
            System.out.println("Total Even : "+even);
        }
        if(str.equals("odd")){
            for(T value:element)
                if(Integer.parseInt(value.toString())%2!=0)
                    odd++;
            System.out.println("Total Odd : "+odd);
        }
        if(str.equals("prime")){
            for(T value:element)
                if(isPrime(Integer.parseInt(value.toString())))
                    prime++;
            System.out.println("Total Prime : "+prime);
        }
        if(str.equals("palindrome")){
            for(T value:element){
                StringBuffer rev = new StringBuffer(value.toString());
                if(value.toString().equals(new String(rev.reverse())))
                    palin++;
            }
            System.out.println("Total Palindrome : "+palin);
        }
    }
    public static void main(String[] args){
        Integer iarray[] = {45,70,12,84,38,151,29,30,19,11};
        count("even",iarray);
        count("odd",iarray);
        count("prime",iarray);
        count("palindrome",iarray);
    }
}

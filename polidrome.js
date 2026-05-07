let num=121;
let n=num;
let rev=0;
let rem=0;

while(num>0){

    rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}

if(rev==n){
    console.log("Polidrome: "+n);
}else{
    console.log("Not Polidrome: "+n);
}
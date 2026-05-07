let n=10;
let flag=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1;
        break;
    }
}

 if(flag==1){
        console.log("Not prime");
    }else{
        console.log("Prime");
    }
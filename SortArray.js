const numbers=[5,2,9,1,5,6];
 for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]>numbers[j]){
            let temp=numbers[i];
            numbers[i]=numbers[j];
            numbers[j]=temp;
        }
    }

    console.log(numbers[i]);
 }
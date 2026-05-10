let arr=[1,2,3,4,5]
let keyElemenet=30;
let flag=0;
for(let i=0;i<arr.length;i++){

    if(arr[i]==keyElemenet){
        flag=1;
        break;
    }
}

if(flag==1){
console.log("Key element is found in the array");
}else{
    console.log("Key element is not found in the array");
}

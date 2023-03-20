
const arr = [1,2,3,4,5];
const obj = {
    name : 'x',
    number: '234',
    address: 'khulna'
}

//type 1 
for( let i =0; i< arr.length ; i++){
    console.log(arr[i]);
}


//type 2 : array = for of 
for (let i of arr){
    console.log(i);
}

// object = for in 
for (let i in obj){
    console.log(i); // access keys
    console.log(obj[i]); //access values
}

//while loop
let i = 0;

while(i<arr.length){
    console.log(arr[i]);
    i++
}
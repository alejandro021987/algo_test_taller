function squaredArray(arr){
    
    for (i=0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i],2);
    }
    
    return array.sort(function(a, b){return a-b});
}


let array = [1, 2, 3, 5, 6, 8, 9];
console.log(squaredArray(array));

array = [-2, -1];
console.log(squaredArray(array));


array = [-10, -5, 0, 5, 10];
console.log(squaredArray(array));



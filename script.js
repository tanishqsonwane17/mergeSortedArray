let arr1 = [2,4,6,8,10];
let arr2 = [1,3,5,7,9];
let ans = new Array(arr1.length+arr2.length)
let i = 0, j = 0, k = 0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        ans[k] = arr1[i]
        k++
        i++
    }
    else{
        ans[k] = arr2[j]
        k++
        j++
    }
}
while(i<arr1.length){
    ans[k] = arr1[i]
    i++
    k++
}

while(j<arr2.length){
    ans[k] = arr2[j]
    j++
    k++
}
console.log(ans)


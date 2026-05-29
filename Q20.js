// soting using while loop
let arr = [1, 2, 5, 3, 2];
let i = 0;
while (i < arr.length) {

    let j = 0;
    while (j < arr.length - 1) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

        }
        


    }
    j++
}
i++

console.log(arr)

const quicksort = (array) => {
    if (array.length <= 1) {
        return array;
    } else {
        let pivot = array[0];
        let left = [];
        let right = [];
        for (let i = 1; i < array.length; i++) {
            if (pivot < array[i]) {
                right.push(array[i])
            } else if (pivot > array[i]) {
                left.push(array[i])
            }
        }
// function needs to iterte itself hence the quicksorted left and right arrays
        return quicksort(left).concat(pivot, quicksort(right))
    }
}

let numbers = [45, 98, 35, 76, 12, 4, 18, 5, 643, 34, 723, 21124, 10]
let sortedNumbers = quicksort(numbers);

console.log(sortedNumbers)
let changes = 0;
let pass = 0;

const bubbleSort = (array) => {
let bubbleSortArray = array
    for (let i = 0; i < bubbleSortArray.length; i++) {
        let first = bubbleSortArray[i];
        let second = bubbleSortArray[i + 1]
        if (first > second) {
            bubbleSortArray.splice(i, 2, second, first)
            console.log(`Swapped ${first} with ${second} and the array looks like this: ${bubbleSortArray}`);
            changes++;
        } else {
            console.log(`No change required, array looks like this: ${bubbleSortArray}`)
        }
    }
    if (changes !== 0) {
        changes = 0
        pass++;
        console.log(`Array has gone through ${pass} iterations. Going for another one.`)
        bubbleSort(bubbleSortArray)
    } else {
        console.log(bubbleSortArray)
    }
}

const numbers = [45, 98, 35, 76, 12, 4, 18, 5, 643, 34, 723, 21124, 10]
bubbleSort(numbers)

//fizz buzz
//binary sort
//map and reduce algorythm

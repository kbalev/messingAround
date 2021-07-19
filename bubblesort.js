let changes = 0;
let pass = 0;

const bubbleSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        let first = array[i];
        let second = array[i + 1]
        if (first > second) {
            array.splice(i, 2, second, first)
            console.log(`Swapped ${first} with ${second} and the array looks like this: ${array}`);
            changes++;
        } else {
            console.log(`No change required, array looks like this: ${array}`)
        }
    }
    if (changes > 0) {
        changes = 0
        pass++;
        console.log(`Array has gone through ${pass} iterations. Going for another one.`)
        bubbleSort(array)
    } else {
        return array
    }
}

const numbers = [45, 98, 35, 76, 12, 4, 18, 5, 643, 34, 723, 21124, 10]
const sortedNumbers = bubbleSort(numbers)
console.log(sortedNumbers)

//fizz buzz
//binary sort
//map and reduce algorythm

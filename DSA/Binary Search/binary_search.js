//used for sorted arrays
/*
    find the middle element of the array(m)
    if target > mid : serach right, otherwise search left
    if middle element is equal to target. return the middle element index.
    m=s+e/2
    t>=m?search right: search right
*/

/**
 * max number of comparisions in a binary search?
 * at level one -> n/2 || n/2^1
 * at level two -> n/4 || n/2^2
 * .... at kth level -> n/2^k
 * log(n)
 */
const arr = [2, 4, 9, 10, 12, 14, 18, 19]

function binarySearch(arr, t) {
    var start = 0;
    var end = arr.length - 1;

    while (start <= end) {
        // find the middle element
        var mid = start + Math.floor((end - start) / 2); // to cover the possibility if start and end are a very big value

        if (t < arr[mid]) {
            end = mid - 1;
        } else if (t > arr[mid]) {
            start = mid + 1;
        } else {
            console.log(`The element exists at index: `+mid);
            return mid;
        }
    }
    console.log(-1);
    return -1;

}

binarySearch(arr, 2);
console.log("i am writing this")
console.log("second hman line")

// I am pasting this manually
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));



// copilot wrote this 
function shuffleDigits(value) {
    const digits = String(Math.abs(value)).split('');
    for (let index = digits.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [digits[index], digits[swapIndex]] = [digits[swapIndex], digits[index]];
    }
    return Number(digits.join(''));
}

console.log(shuffleDigits(48291));





function diagonalDifference(arr) {
    // Write your code here
    let absoluteDifference = 0;
    let diagonal1 = 0;
    let diagonal2 = 0;
    const highestIndex = arr.length - 1;
    
    for (let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][highestIndex - i];
    }
    
    absoluteDifference = Math.abs(diagonal1 - diagonal2);
    return absoluteDifference;
}
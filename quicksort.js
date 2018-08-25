const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, left, right) => {
    const value = arr[right];
    let index = left;
    for (let i = left; i < right; i++) {
        if ( value > arr[i]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, right, index);
    return index;
}

const quickSort = (arr, left, right) => {
    if (left < right) {
        const index = partition(arr, left, right);
        quickSort(arr, left, index -1);
        quickSort(arr, index + 1, right);
    }
    return arr;
}

console.log(quickSort([3,7,8,4,2,1,5], 0, 6))
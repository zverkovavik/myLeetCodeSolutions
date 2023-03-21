const binarySearch = (list, target) => {
  let low = 0;
  let high = list.length - 1;
  let middle = Math.round((low + high) / 2);
  while (low <= high) {
    middle = Math.round((low + high) / 2);
    if(list[middle] === target) {
      return middle;
    } else if(list[middle] > target) {
      high = middle;
    } else {
      low = middle;
    }
  }
}

binarySearch([1,2,3,4,5,7,8, 9, 10, 12], 2);

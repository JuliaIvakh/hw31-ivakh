function flatF(array) {
  const newArr = [];
  if (arguments.length > 1)
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else newArr.push(el);
    });
  })(array);
  return newArr;
}

console.log(flatF([1, 2, [3, 4, [5, 6, [7, 8, [9]]]]]));

console.log(flatF([1, 2, [3, 4, [5, 6, [7, 8, [9]]]]], [2, 4, 7]));

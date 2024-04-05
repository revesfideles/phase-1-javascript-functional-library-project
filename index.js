function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
  
    return collection;
  }

  function myMap(collection, callback) {
    let newArray = [];
  
    for (let key in collection) {
      newArray.push(callback(collection[key]));
    }
  
    return newArray;
  }

  function myReduce(collection, callback, acc) {
    let accumulator;
    let startIdx;
  
    if (typeof acc === 'undefined' && collection.length > 0) {
      accumulator = collection[0];
      startIdx = 1;
    } else {
      accumulator = typeof acc === 'undefined' ? 28 : acc;
      startIdx = 0;
    }
  
    for (let i = startIdx; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  
    return accumulator;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const sumCallback = (acc, current) => acc + current;
  
  const result = myReduce(numbers, sumCallback, 0);
  console.log(result); // Output: 15

  function myFind(collection, predicate) {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  
    return undefined;
  }

  function myFilter(collection, predicate) {
    let filteredArray = [];
  
    for (let key in collection) {
      if (predicate(collection[key])) {
        filteredArray.push(collection[key]);
      }
    }
  
    return filteredArray;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(array, n) {
    if (n === undefined || n <= 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined || n <= 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function mySortBy(array, callback) {
    let sortedArray = array.map((value) => {
      return { originalValue: value, transformedValue: callback(value) };
    });
  
    sortedArray.sort((a, b) => {
      if (a.transformedValue < b.transformedValue) {
        return -1;
      }
      if (a.transformedValue > b.transformedValue) {
        return 1;
      }
      return 0;
    });
  
    let resultArray = sortedArray.map((obj) => {
      return obj.originalValue;
    });
  
    return resultArray;
  }

  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }
  
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        myFlatten(array[i], false, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
  
    return newArr;
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }


const arrayTasks = {

	concat: function (arr1, arr2) {
    return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
    const result = arr.map ( function(number) {
      return number * number;
    })
    return result;
	},

	sum: function (arr) {
    const total = arr.reduce(function(runningTotal, number){
    return runningTotal + number;
    }, 0)

    return total;

	},

	removeAndClone: function (arr, valueToRemove) {
    const filteredArray = arr.filter(function(number){
      return number !== valueToRemove;
    });
    return filteredArray;
	},



	findIndexesOf: function (arr, itemToFind) {
    const indexArray = [];

    arr.forEach(function(number, index){
      if(number === itemToFind){
        indexArray.push(index);
      }
    });
    return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {

	  const evenNumbers = arr.filter(function(number){
	    return number % 2 === 0;
	  });

	  const squaredNumbers = this.square(evenNumbers);
	  const sum = this.sum(squaredNumbers);
	  return sum;
	},

	// ----------- EXTENSION ------------

	findDuplicates: function (arr) {

		let countHash = {};

		arr.forEach(function(number){
			if (number in countHash){
				countHash[number] +=1;
			}
			else{
				countHash[number] = 1;
			}
		});

		const keys = Object.keys(countHash);

		let duplicatesArray = [];
		for (key of keys) {
			if (countHash[key] > 1){
				const number = parseInt(key);
				duplicatesArray.push(number);
			}
		}

		return duplicatesArray;
	},

}

module.exports = arrayTasks

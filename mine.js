arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let afeez = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(afeez);


numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = numbers.reduce((acc, curr) => { 
    return mine = () => { 
        return acc + curr;
    }
})
console.log(newNumbers(mine)); 
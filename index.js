// Add your functions here


function map(array, callback) {
    const newArray =[];
    for (let i =0; i < array.length; i++) {
        const element = array[i];
        newArray.push(callback(element));
    }
    return newArray
}

//this was hard to understand, but essentially performs a function on each element of array passed in and pushes the new elements to the newArray, so can do an of the functions we did in previous lab, just be reusing the code and passing in the callback function)

function reduce(array, callback, startingValue) {
    let tally;
    if (startingValue) {
        tally = startingValue;
        for (let i = 0; i < array.length; i++) {
            tally = callback(array[i], tally);
        }
        return tally;
    } else {
        tally = array[0];
        for (let i = 1; i < array.length; i++) {
            tally = callback(array[i], tally);
        }
        return tally;
    }
}

//this one was wicked and I don't quite understand the whole of it, but it takes a source array, a callback function, and an optionl starting value- the first part is declaring the tally variable to store the total, then if there is a starting value passed in the tally or total is set equal to the starting value, assume a bank account with a balance of 10.00, then an array of transactions are passed in and a function is called on them affecting the total ---- if no starting value is passed in, the tally is set to the first element in the array and the function is called on each element forward (tally[1]), then the new tally is returned.
// synchronous code
console.log('1');
console.log('2');
console.log('3');
console.log('4');

// asynchronous code

function asyncFun (){
    console.log('2');
}

console.log('1');

// this part of code will be executed after 4 seconds
// setTimeout(() => {
//   console.log('2');
// }, 2000);

// setTimeout takes in func callback and time in milliseconds
setTimeout(asyncFun, 4000);
console.log('3');
console.log('4');

// callback functions

function sum (a, b) {
    return a + b;
}

// callback is passed with function name and not with parenthesis, if parenthesis is used then it will be executed immediately and returned value is passed
function calc (a, b, sum) {
    return sum(a, b);
}

// for async code
function getData (dataID, callback) {
    setTimeout(() => {
        console.log('Reading from database: ', dataID);
        callback();
    }, 2000);
}

// callback hell - nested callbacks forming a pyramid - not recommended
getData(1, () => { 
    console.log('Data received');
    getData(2, () => {
        console.log('Data received');
        getData(3, () => {
            console.log('Data received');
        });
    });
}
);

// promises - used to handle async code and avoid callback hell
// promise is an object that may produce a single value some time in the future
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('I am a promise');
        resolve("promise resolved"); // promise is resolved, state is fulfilled
        reject("some error occured"); // promise is rejected state is rejected

    }, 2000);
});

promise;
// promise object has 3 states - pending, fulfilled, rejected
// when the promise is resolved, then() is called and when it is rejected, catch() is called 
promise.then(() => {
    console.log('Promise resolved');
});
promise.catch(() => {
    console.log('Promise rejected');
});

function getDataPromise (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise Reading from database: ', dataID);
            resolve("PROMISE DATA RECEIVED");
            reject("some error occured"); // promise is rejected state is rejected
        }, 2000);
    });
}

let promise1 = getDataPromise(1);
promise1.then((data) => {
    console.log(data);
});
promise1.catch((error) => {
    console.log(error);
});

// Promise chaining
function getDataPromiseChain (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise1 Reading from database: ', dataID);
            resolve(dataID);
            reject("some error1 occured"); // promise is rejected state is rejected
        }, 4000);
    });
}

let promise2 = getDataPromiseChain(1);
promise2.then((data) => {
    console.log(data);
    return getDataPromiseChain(data + 1);
});

function getDataPromiseChain2 (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise2 Reading from database: ', dataID);
            resolve(dataID);
            reject("some error2 occured"); // promise is rejected state is rejected
        }, 4000);
    });
}

let promise3 = getDataPromiseChain2(1); 
promise3.then((data) => {
    console.log(data);
    return getDataPromiseChain2(data + 1);
});


console.log('Promise chaining 1.....');
let promiseChaining = getDataPromiseChain(1);
promiseChaining.then((data) => {
    console.log(data);
    console.log('Promise chaining 2.....');
    let promiseChaining2 = getDataPromiseChain2(data + 1);
    promiseChaining2.then((data) => {
        console.log(data);
    });
});

getDataPromiseChain(1).then((data) => { 
    console.log(data);
    return getDataPromiseChain2(data + 1);
}).then((data) => {
    console.log(data);
});


// async await - used to handle async code and avoid promise chaining
// async function returns a promise and await makes the function wait for the promise to be resolved or rejected
async function getDataAsync (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async Reading from database: ', dataID);
            resolve(dataID);
            reject("some error occured"); // promise is rejected state is rejected
        }, 2000);
    });
}

async function getDataAsyncChain (dataID) {
    let data = await getDataAsync(dataID);
    console.log(data);
    data = await getDataAsync(data + 1);
    console.log(data);
    data = await getDataAsync(data + 1);
    console.log(data);
}

getDataAsyncChain(1).then((data) => {
    console.log(data);
});

// async await with try catch
async function getData(){
    try {
        let data = await getDataAsync(1);
        console.log(data);
        data = await getDataAsync(data + 1);
        console.log(data);
        data = await getDataAsync(data + 1);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// ASYNC AWAIT MAKES THE CODE LOOK LIKE SYNCHRONOUS CODE

// EASY TO READ AND WRITE

function getDataaa (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading from database: ', dataID);
            resolve(dataID);
            reject("some error occured"); // promise is rejected state is rejected
        }, 10000);
    });
}


async function getDataAsyncChain2 (dataID) {
    try {
        console.log('geting data: ', dataID);
        await getDataaa(dataID);
        console.log('geting data: ', dataID+1);
        await getDataaa(dataID + 1);
        console.log('geting data: ', dataID+2);
        await getDataaa(dataID + 3);
    } catch (error) {
        console.log(error);
    }
}

getDataAsyncChain2(1);

// IIFE - Immediately Invoked Function Expression
// function that runs as soon as it is defined
// used to avoid polluting the global namespace
(function () {
    console.log('IIFE');
})();

// arrow functions
// shorter syntax for writing function expressions
(() => {
    console.log('IIFE arrow function');
})();
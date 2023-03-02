// forEach

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val*2);       
    });
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
       val[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let obj = {};
    let newStr = str.split("");
    let vowels = 'aeiou';
    newStr.forEach(function(letter) {
        const newLetter = letter.toLowerCase();
        if (vowels.indexOf(newLetter) !== -1) {
            if (obj[newLetter]) {
                obj[newLetter]++;
            }
            else {
                obj[newLetter] = 1;
            }
        }
        

    });
    return obj;
}


// map

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val, i) {
        return val * i;
    });
}

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return `${val.first} ${val.last}`;
    });
}


// filter

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

function find(arr, num) {
    return arr.filter(function(val) {
        return val[key] === num;
    })[0];
}

function findInObj(arr, key, value) {
    return arr.filter(function(val) {
        return val[key] === value;
    });
}

function removeVowels(str) {
    let vowels = 'aeiou'
    return str
        .toLowerCase()
        .split('')
        .filter(function(val) {
            return vowels.indexOf(val) === -1;
        }).join(' ');
}

function doubleOddNumbers(arr) {
    return arr
        .filter(function(val) {
            return val % 2 !== 0;
        })
        .map(function(val) {
            return val * 2;
        });
}
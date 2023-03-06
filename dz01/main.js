function flatten(arr) {
    let result = new Array;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result = result.concat(arr[i]);
        }
    }
    return result;
}

function flatten2(arr, l, r) {
    if (r - l == 1) {
        if (Array.isArray(arr[l])) {
            return flatten2(arr[l], 0, arr[l].length);
        } else {
            return [arr[l]];
        }
    }
    return flatten2(arr, l, (l + r) >> 1).concat(flatten2(arr, (l + r) >> 1, r));
}
let ex = [1, 2, 3, [4, 5, 6, [10, 20, 30]]];
let res1 = flatten(ex);
console.log(res1);

let res2 = flatten2(ex, 0, ex.length);
console.log(res2);

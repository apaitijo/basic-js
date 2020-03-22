module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array!');
    }

    arr.forEach((el, i) => {
        switch (el) {
            case '--double-next':
                if (i === arr.length - 1) {
                    arr.splice(i, 1);
                } else {
                    arr[i] = arr[i + 1];
                }
                break;
            case '--double-prev':
                if (i === 0) {
                    arr.splice(i, 1);
                } else {
                    arr[i] = arr[i - 1];
                }
                break;
        }
    });
    for (let i = 0; i < arr.length;) {
        switch (arr[i]) {
            case '--discard-next':
                arr.splice(i, 2);
                break;
            case '--discard-prev':
                if (i === 0) {
                    arr.splice(0, 1);
                } else {
                    arr.splice(i-- - 1, 2);
                }
                break;
            default:
                i++;
                break;
        }
    }
    return arr;
};

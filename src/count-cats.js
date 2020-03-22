module.exports = function countCats(backyard) {
    return backyard.reduce(
        (s, arr) => s + arr.reduce((cats, v) => cats + (v === '^^' ? 1 : 0), 0),
        0,
    );
};

const points = [[1, 2], [3, 4], [5, 6]];

function scaleX(x) {
    return x * 2;
}

function scaleY(y) {
    return y * 3;
}

// Call flatArray with points, scaleX, scaleY, and no custom context
const transformedPoints = flatArray(points, scaleX, scaleY);

console.log(transformedPoints); // Output: [2, 6, 6, 12, 10, 18]

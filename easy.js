// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(x) {
    return `Todays exercise: ${x}`
}
console.log(exercise('running'));
console.log(exercise('swimming'));
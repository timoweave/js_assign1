
function q(i, x) {
    console.log('');
    console.log(Array(x.length + 4).join('/'));
    console.log(i + '. ' + x);
    console.log('');
}

/////////////////////////////////////////////////////////
q(1,
  'create a program that goes through each value in array x, ' +
  'where x is [3,5,"Dojo", "rocks", "Michael", "Sensei"]. ' +
  'Have it log each value of the array.');

function a1(x) {
    if ((!x) || !Array.isArray(x)) {
        return;
    }
    
    for (var i = 0; i < x.length; i++ ) {
        console.log('x[' + i + '] = ' + x[i]);
    }
}
a1([3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']);


/////////////////////////////////////////////////////////
q(2,
  'Add a new value in the array x using a push method. ' +
  'New value you should add is 100.');

function a2(x, y) {
    if (((!x) || !Array.isArray(x)) || (!Number.isInteger(y))) {
        return;
    }
    
    x.push(y);
    return x;
}
console.log('x = [' + a2([3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'], 100) + ']');

/////////////////////////////////////////////////////////
q(3,
  'Add a new array as the last member of the array then log x ' +
  'in the console and analyze how x looks.');

function a3(x, y) {
    x.push(y);
    return x;
}
console.log('x = [' + a3([3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'], [-1, -2, -3]) + ']');

/////////////////////////////////////////////////////////
q(4,
  'Create a simple for loop that sums all the numbers ' +
  'between 1 to 500. Have console log the final sum.');

function a4(first, last) {
    var sum = 0;
    var ok =(first &&
             last &&
             Number.isInteger(first) &&
             Number.isInteger(last) &&
             (first <= last));
    if (ok) {
        for (var i = first; i <= last; i++) {
            sum += i;
        }
    }
    return sum;

}
console.log('sum = ' + a4(1, 500) + ' (ans = 125250)');

/////////////////////////////////////////////////////////
q(5,
  'Write a loop that will go through the array ' +
  '[1, 5, 90, 25, -3, 0], find the minimum value, and then print it');

function a5(x) {
    if ((!x) || !Array.isArray(x)) {
        return;
    }
    var minium;
    for (var i = 0; i < x.length; i++) {
        if (x[i] && Number.isInteger(x[i])) {
            if ((minium > x[i]) || (!minium)) {
                minium = x[i];
            }
        }
    }
    return minium;
}
console.log('min = ' + a5([1, 5, 90, 25, -3, 0]) + ' (ans = -3)');

/////////////////////////////////////////////////////////
q(6,
  'Write a loop that will go through the array ' +
  '[1, 5, 90, 25, -3, 0], find the average of all of the values, ' +
  'and then print it');

function a6(x) {
    if ((!x) || !Array.isArray(x)) {
        return;
    }

    var average;
    var size = 0;
    for (var i = 0; i < x.length; i++) {
        if ((x[i] || (x[i] == 0)) && Number.isInteger(x[i])) {
            if (!average) {
                average = 0;
            }
            average += x[i];
            size++;
        }
    }
    if (size > 0) {
        average = average / size;
    }
    return average;
}
console.log('avg = ' + a6([1, 5, 90, 25, -3, 0]) + ' (ans = 19.67)'); 




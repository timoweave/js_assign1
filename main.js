
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
    var text = "";
    for (var i = 0; i < x.length; i++ ) { 
        text += 'x[' + i + '] = ' + x[i] + '\n';
    } 
    return text;
}
console.log(a1([3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']));


/////////////////////////////////////////////////////////
q(2,
  'Add a new value in the array x using a push method. ' +
  'New value you should add is 100.');

function a2(x, y) {
    if (((!x) || !Array.isArray(x)) || (typeof y != 'number')) {
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

function a4(first, last) { // standalone function
    var sum = 0;
    var ok =(first &&
             last &&
             typeof first != 'number' && 
             typeof last != 'number' &&
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

var a5 = function(x) { // annoymous function
    if ((!x) || !Array.isArray(x)) {
        return;
    }
    var minium;
    for (var i = 0; i < x.length; i++) {
        if (x[i] && (typeof x[i] == 'number')) {
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

var a6 = {
    avg : function(x) { // method
        if ((!x) || !Array.isArray(x)) {
            return;
        } 
        var average;
        var size = 0;
        for (var i = 0; i < x.length; i++) {
            if ((x[i] || (x[i] == 0)) && (typeof x[i] == 'number')) {
                if (!average) {
                    average = 0;
                } 
                average += x[i] ;
                size++ ;
            } 
        } 
        if (size > 0) {
            average = average / size;
        } 
        return average;
    } 
} 
console.log('avg = ' + a6.avg([1, 5, 90, 25, -3, 0]) + ' (ans = 19.67)'); 




let numbers = [ 1, 2, 3 ];

function average(numbers) {
    let total = 0;
    numbers.forEach(function(element) {
       total += element; 
    });
    average = total / numbers.length;
    return average;
}

average(numbers);

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


// function is for Luhns Algo. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
// As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
// Sum up all the digits in the credit card number.
// If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

function validateCred(array) {
    
    array.pop();
    let newArray = [];
    
    //for loop starts at last array element
    for(i = array.length-1; i >= 0; i--){
        
        //push check number to new array
        //if (i == array.length-1) {
           // newArray.push(array[i]);
        //} 
        //if not the last digit check if even or odd 
        //else if (i < array.length-1) {

            //checking if digit is even. if even push to new array
            if (i % 2 == 0) {
                newArray.push(array[i]);
            }

            //if odd then multiply by 2. if greater than 9 after doubling .. subtract 9. push to new array
            else {
                let oddElement = array[i];
                let newElement = oddElement * 2;
                if (newElement > 9) {
                    let subElement = newElement - 9;
                    newArray.push(subElement);
                } 

                //if even then push to new array
                else {
                   // newArray.push(newElement);
                }
            }
        }
        //else {
            //console.log('error');
        //}
    
        //print new array 
    console.log(newArray);

    //sum all digits/elements 

    let sum = newArray.reduce((a, b) => a + b, 0)

    //print sum
    console.log(sum);

    if (sum % 10 == 0) {
        console.log('true');
    } 

    else {
        console.log('false');
    }

        
    };


    

validateCred(valid1);




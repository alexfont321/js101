// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

//ADDING CONDITIONS TO THE LOOP

// function addExcitement(theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = "";
//     let emptyArray = [];
//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += ` ${theWordArray[i]}`;
//         emptyArray.push(buildMeUp);
//         if (emptyArray.length % 3 === 0) {
//             buildMeUp += "!";
//             console.log(buildMeUp)
//         // } else if (emptyArray.length === 6) {
//         //     console.log(buildMeUp + "!");
//         } else {
//             console.log(buildMeUp)
//         }
//     }
// }

//ADDING THE MULITPLE EXCLAMATION POINTS

// function addExcitement(theWordArray) {
//     let buildMeUp = "";
//     let emptyArray = [];

//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += ` ${theWordArray[i]}`;
//         emptyArray.push(buildMeUp);
//         if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 1) {
//             buildMeUp += "!";
//             console.log(buildMeUp)
//         } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 2) {
//             buildMeUp += "!!";
//             console.log(buildMeUp)
//         } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 3) {
//             buildMeUp += "!!!";
//             console.log(buildMeUp)
//         } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 4) {
//             buildMeUp += "!!!!";
//             console.log(buildMeUp)
//         }
//         else {
//             console.log(buildMeUp)
//         }
//     }
// }

function addExcitement(theWordArray, mark) {
    let buildMeUp = "";
    let emptyArray = [];

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += ` ${theWordArray[i]}`;
        emptyArray.push(buildMeUp);
        if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 1) {
            buildMeUp += mark;
            console.log(buildMeUp)
        } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 2) {
            buildMeUp += mark + mark;
            console.log(buildMeUp)
        } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 3) {
            buildMeUp += mark;
            console.log(buildMeUp)
        } else if (emptyArray.length % 3 === 0 && emptyArray.length / 3 === 4) {
            buildMeUp += mark;
            console.log(buildMeUp)
        }
        else {
            console.log(buildMeUp)
        }
    }
}




// Invoke the function and pass in the array
addExcitement(sentence, "?");
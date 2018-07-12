let numbers = 0; 


for (i = 0; i < 100; i++) {
    numbers += 1
    if (numbers % 5 === 0 && numbers % 7 === 0) {
        console.log("Chicken Monkey");
    } else if (numbers % 5 === 0) {
    console.log("Chicken");
    } else if (numbers % 7 === 0) {
        console.log("Monkey");
    } else {
        console.log(numbers)
    }
}


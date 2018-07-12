const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];


const grill = currentObject => {
	//return cooked food set to true
	currentObject.cooked = true;
	
	// push the newly cooked object (still represented by 'currentObject') into the empty array cookedFood
    cookedFood.push(currentObject);
    // uncookedFood.unshift(currentObject);
    uncookedFood.shift(currentObject)

};

// 1. Write a for loop that iterates over the objects in the uncookedFood array. Ensure the loop only iterates to the end of the array.

for (let i = 0; i < uncookedFood.length; i) {
   let foodBeingCooked = uncookedFood[i];
   grill(foodBeingCooked);
}
    


// 2. Console.log() the results to ensure your loop is returning Food objects.

// 3. Save uncookedFood[i] into a variable named 'currentObject'.



// 4. Now, add a line that calls the grill() function and passes in the current item being iterated over.

// If the loop successfully iterates over the array and successfully executes the grill() function on each object. This console log should appear as an array that has each object's 'cooked' key now shows true.

console.log('CookedFood array after our loop ran!: ', cookedFood);


console.log('Food that is still uncooked: ', uncookedFood);
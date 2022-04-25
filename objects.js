// create a function that allows user to 
//pick crust sauce cheese and toppings

function pizzaOven(crustType, sauceType, cheeses, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

}

let DeepDishPeppy = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
let HandVeggie = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let PannyMushroom = pizzaOven("thin crust", "traditional", ["mozzarella"], ["pepperoni", "mushrooms"]);
let PanCheese = pizzaOven("thin crust", "traditional", ["mozzarella"],["extra cheese"]);

//print pizzas
console.log(DeepDishPeppy);
console.log(HandVeggie);
console.log(PannyMushroom);
console.log(PanCheese);

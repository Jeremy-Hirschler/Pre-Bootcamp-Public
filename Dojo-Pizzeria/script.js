function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var order1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]);

var order2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"],
    ["mushrooms", "olives", "onions"]);

var order3 = pizzaOven("thin", "white", ["mozzerella"],
    ["peppers", "sausage", "onions"]);


var order4 = pizzaOven("hand tossed", "marinara", "no cheese",
    ["jalapenos", "gravy"]);

/*console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4); */

var num = Math.round(Math.random()*3);

function randomPizza () {
    var random = Math.round(Math.random()*3);
    if (random == 0) {
        order = order1;
    } else if (random == 1) {
        order = order2;
    } else if (random == 2) {
        order = order3;
    } else {
        order = order4;
    }
    return order
}

console.log(randomPizza());



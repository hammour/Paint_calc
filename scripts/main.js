var width = parseFloat(prompt("what is your room ceiling width?"));
var length = parseFloat(prompt("What is your room  length?"));
var area = width*length;
var gallons = Math.ceil(area/350);
document.write("You will need to purchase "+gallons+" gallons of paint to cover "+area+" square feet.");

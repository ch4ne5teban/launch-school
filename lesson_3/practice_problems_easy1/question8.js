//How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");

console.log(flintstones);

//Alternative
flintstones = flintstones.concat("Dino");
flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]


//Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));
console.log(Object.hasOwn(ages, 'Spot'));

//From MDN: The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it). ****Note: Object.hasOwn() is recommended over hasOwnProperty(), in browsers where it is supported.****

//The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

//The method can be called on most JavaScript objects, because most objects descend from Object, and hence inherit its methods. For example Array is an Object, so you can use hasOwnProperty() method to check whether an index exists:
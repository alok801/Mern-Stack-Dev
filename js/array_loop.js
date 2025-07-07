//Array or Object Loop

let userInfo = {
    name: "John",
    age: 30,
    city: "New York"
}

let userArray = [
    { id: 1, name: "Alice", age: 25, city: "Los Angeles", phone: "123-456-7890" },
    { id: 2, name: "Bob", age: 28, city: "Chicago", phone: "987-654-3210" },
    { id: 3, name: "Charlie", age: 35, city: "Miami", phone: "555-123-4567" },
    { id: 4, name: "David", age: 22, city: "Seattle", phone: "444-987-6543" },
    { id: 5, name: "Eve", age: 29, city: "San Francisco", phone: "333-555-7890" },
    { id: 6, name: "Frank", age: 32, city: "Boston", phone: "222-444-1234" },
    { id: 7, name: "Grace", age: 27, city: "Austin", phone: "111-222-3456" },
    { id: 8, name: "Hannah", age: 31, city: "Denver", phone: "666-777-8901" },
    { id: 9, name: "Ian", age: 24, city: "Phoenix", phone: "888-999-0123" },
    { id: 10, name: "Jack", age: 26, city: "Portland", phone: "444-555-6789" }
];
// console.log("User Info Object:", userArray);
/** 
console.log("id: "+ userArray[0].id);
console.log("Name: "+ userArray[0].name);
console.log("Age: "+ userArray[0].age);
console.log("City: "+ userArray[0].city);
console.log("Phone: "+ userArray[0].phone);
*/

// Loop through the userArray and print each user's information
// for (let i = 0; i < userArray.length; i++) { 

//for in loop for index
// let userObj = userArray[i]   
/*
//for of for value
for(let userObj of userArray){
    console.log("User ID: " + userObj.id);
    console.log("Name: " + userObj.name);
    console.log("Age: " + userObj.age);
    console.log("City: " + userObj.city);
    console.log("Phone: " + userObj.phone);
    console.log("-------------------------");
}
*/
let products = [
    { name: "Laptop", brand: "Dell", price: 999.99, discount: 10 },
    { name: "Smartphone", brand: "Samsung", price: 799.99, discount: 15 },
    { name: "Headphones", brand: "Sony", price: 199.99, discount: 20 },
    { name: "Smartwatch", brand: "Apple", price: 399.99, discount: 5 },
    { name: "Camera", brand: "Canon", price: 699.99, discount: 12 },
    { name: "Gaming Console", brand: "Microsoft", price: 499.99, discount: 8 },
    { name: "Tablet", brand: "Lenovo", price: 299.99, discount: 25 },
    { name: "Speaker", brand: "JBL", price: 149.99, discount: 18 },
    { name: "Monitor", brand: "LG", price: 349.99, discount: 15 },
    { name: "Keyboard", brand: "Logitech", price: 89.99, discount: 30 }
];


for (let product of products) {
    let afterDiscount = product.price * product.discount / 100;
    let DiscountRec = product.price - afterDiscount;

    console.log("Product Name: " + product.name);
    console.log("Brand: " + product.brand);
    console.log("Price: " + product.price);
    console.log("Discount: " + product.discount + "%");
    console.log("After Discount Price: " + afterDiscount);
    console.log("Discount Received: " + DiscountRec);
    console.log("-------------------------");
}

console.log("\n");
console.log("\n");

for (let i in products) {
    
    let useObj = products[i]
    let afterDiscount = useObj.price * useObj.discount / 100;
    let DiscountRec = useObj.price - afterDiscount;

    
    console.log("Product Name: " + useObj.name);
    console.log("Brand: " + useObj.brand);
    console.log("Price: " + useObj.price);
    console.log("Discount: " + useObj.discount + "%");
    console.log("After Discount Price: " + afterDiscount);
    console.log("Discount Received: " + DiscountRec);
    console.log("-------------------------");

}
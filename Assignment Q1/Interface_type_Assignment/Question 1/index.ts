// Task 1: Modeling Online Store Entities
// You're building a TypeScript application for an online store. Define the following types and interfaces:
// Define an interface Product with properties like id, name, price, and category.
// Create a type Cart that represents an array of Product objects.
// Define an interface Customer with properties like id, name, and email.
// Create a type Order that represents an object containing a Customer and a Cart.
// Implement a function that calculates the total price of products in the cart.

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}
type Cart = Product[] 
interface Customer {
    id: number;
    name: string;
    email: string;
}
type Order = {
    customer : Customer;
    cart: Cart;
}
let calculates = function (price: Product[]){
    let sum = 0;
    for (let i = 0; i<price.length; i++){
        sum += price[i].price;
    }
    return sum;
}
let products: Product[] =[{id: 123, name: "Ali", price: 2500, category: "Sports"},
{id: 456, name: "Kamran", price: 3000, category: "Clothing"}];
calculates(products);

const products = [
    { name: "Shirt", category: "Clothing"},
    { name: "Pants", category: "Clothing"},
    { name: "Hat", category: "Accesories"},
    { name: "Sunglasses", category: "Accesories"},
];

function filterByCategory(products){
    return function(category){
        return products.filter(function (products){
            return products.category==category;
        })
    }
}

const res=filterByCategory(products)("Clothing");
console.log(res);


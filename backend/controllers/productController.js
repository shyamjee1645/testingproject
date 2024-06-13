const products = [
    {
        id: 1,
        address: "123 Main St",
        price: 250000,
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        builtYear: 2005,
        description: "Beautiful home in a quiet neighborhood."
    },
    {
        id: 2,
        address: "456 Elm St",
        price: 300000,
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2200,
        builtYear: 2010,
        description: "Spacious house with a large backyard."
    },
    // Add more sample data objects as needed
];

let getAllProducts = (req, res) => {
    res.json(products);
}

let getOneProduct = (req, res) => {
    const id = parseInt(req.params.id);
    if (id <= 0 || id > products.length) {
        return res.status(404).json({ message: "Product not found" });
    }
    const product = products.find(prod => prod.id === id);
    res.json(product);
}

let postProduct = (req, res) => {
    const newProduct = req.body;
    // Assuming new product has all required fields
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
}

// Partially update a product by ID
let partiallyUpdateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const index = products.findIndex(prod => prod.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products[index] = { ...products[index], ...updates };
    res.json(products[index]);
}

// Delete a product by ID
let deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(prod => prod.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    const deletedProduct = products.splice(index, 1);
    res.json({ message: "Product deleted", deletedProduct });
}


module.exports = { getAllProducts, getOneProduct, postProduct,partiallyUpdateProduct,deleteProduct };

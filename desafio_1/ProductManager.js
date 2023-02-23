class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(products, product) {
    
    if (this.products.length === 0) {
      products.id = 1;
    } else {
      products.id = this.products[this.products.length - 1].id + 1;
    }
    this.products.push(products);
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id) ?? "Not Found";
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

// PPROCESO DE TESTING
let myProducts = new ProductManager();

// Devuelve arreglo vacío
console.log("Devuelve arreglo vacío");
console.log(myProducts.getProducts());

// Devuelve 2 productos con distinto ID que no se repite
console.log("Devuelve 2 productos con distinto ID que no se repite");
myProducts.addProduct(
  new Product(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  )
);
myProducts.addProduct(
  new Product(
    "producto prueba 2",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc1234",
    25
  )
);
console.log(myProducts.getProducts());

// Devuelve un error cuando se agrega un producto y el code está repetido
console.log(
  "Devuelve un error cuando se agrega un producto y el code está repetido"
);
myProducts.addProduct(
  new Product(
    "producto prueba 3",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc12345",
    25
  )
);
console.log(myProducts.getProducts());

// Devuelve un Producto por ID. Y devuelve un mensaje "Not Found" cuando el ID no existe
console.log("Devuelve el Producto Id = 2");
console.log(myProducts.getProductById(2));

console.log('Devuelve un mensaje "Not Found" cuando el Id no existe');
console.log(myProducts.getProductById(8));

import ProductManager from "./src/ProductManager.js";

const manager = new ProductManager();

const env = async () => {
  let getFileProducts = await manager.getProducts();
  console.log(getFileProducts); //Devuelve el/los objetos del archivo JSON
  let product = {
    title: "producto_3",
    description: "Espinosa",
    price: 26,
    thumbnail: "Backend",
    code: "Backend",
    stock: "Backend",
  };
  let addingProduct = await manager.addProduct(product);
  console.log(addingProduct); //Devuelve el objeto que se agregó
  let getProductsUpdated = await manager.getProducts();
  console.log(getProductsUpdated); //Devuelve el archivo JSON actualizado con el nuevo objeto insertado.
  let getProductbyIdQuery = await manager.getProductById(2)
  console.log(getProductbyIdQuery)
};
env();

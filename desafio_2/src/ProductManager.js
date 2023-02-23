import fs from "fs";

const path = "./Products/Products.json";

export default class ProductManager {
  getProducts = async () => {
    if (fs.existsSync(path)) {
      const data = await fs.promises.readFile(path, "utf-8");
      const products = JSON.parse(data);
      return products;
    } else {
      return [];
    }
  };

  addProduct = async (product) => {
    const prod = await this.getProducts();

    if (prod.length === 0) {
      product.id = 1;
    } else {
      product.id = prod[prod.length-1].id+1;;
    }
    prod.push(product);
    await fs.promises.writeFile(path, JSON.stringify(prod, null, ""));
    return product;
  };

  getProductById = async (id) => {
    const product = await this.getProducts();
    return product.find((product) => product.id === id) ?? "Not Found";
  }
}

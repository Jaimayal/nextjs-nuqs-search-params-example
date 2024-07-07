import { Product } from "../_types/types";
import products from "../_data/products.json";

export default function getAllProducts(search: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.products.filter((product) => {
        return filterByName(product, search) || filterByCategory(product, search) || filterByPrice(product, search);
      }));
    }, 200);
  });
}

function filterByName(product: Product, search: string) {
  return product.title.toLowerCase().includes(search.toLowerCase());
}

function filterByCategory(product: Product, search: string) {
  return product.category.toLowerCase().includes(search.toLowerCase());
}

function filterByPrice(product: Product, search: string) {
  return product.price.toString().includes(search);
}
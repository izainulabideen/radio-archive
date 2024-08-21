import { Product } from "../interfaces/product";
import matter from "gray-matter";

const productsDirectory = "/_products";
const productJsonPath = "/product.json";

export async function getProductSlugs() {
  try {
    const response = await fetch(productJsonPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch product slugs: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSixProductNameSlug() {
  try {
    const data = await getProductSlugs();

    const products = await Promise.all(
      data?.map(async (p: { slug: any; filename: any }) => {
        const realSlug = p.slug;
        const fullPath = `${productsDirectory}/${p.filename}`;
        const response = await fetch(fullPath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch product file: ${response.statusText}`
          );
        }
        const fileContents = await response.text();
        const { data: frontmatter } = matter(fileContents);

        return { title: frontmatter.title, slug: realSlug } as Product;
      })
    );

    const sortedProducts = products
      .sort((product1, product2) => (product1?.date > product2?.date ? -1 : 1))
      .slice(0, 6);

    return sortedProducts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = `${productsDirectory}/${realSlug}.md`;
    const response = await fetch(fullPath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product file: ${response.statusText}`);
    }
    const fileContents = await response.text();
    const { data: frontmatter, content } = matter(fileContents);
    
    return { ...frontmatter, slug: realSlug, content } as Product;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const data = await getProductSlugs();
    const products = await Promise.all(
      data?.map(async (p: { slug: string }) => await getProductBySlug(p.slug))
    );
    return products.sort((product1, product2) =>
      product1.date > product2.date ? -1 : 1
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSixProducts(): Promise<Product[]> {
  try {
    const data = await getProductSlugs();
    
    const products = await Promise.all(
      data?.map(async (p: { slug: string }) => await getProductBySlug(p.slug))
    );
    
    return products
      ?.sort((product1, product2) => (product1?.date > product2?.date ? -1 : 1))
      .slice(0, 6);
  } catch (error) {
    console.error(error);
    return [];
  }
}

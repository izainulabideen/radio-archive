import ProductContent from "./ProductContent";
import ProductHero from "./ProductHero";
import { useEffect, useState } from "react";
import { getProductBySlug } from "../../lib/product";

interface ProductPageProps {
    slug: string;
}

interface ProductProps {
  title: string | null;
  imageUrl: string | null;
  content: string | null;
  author: {
    name: string | null;
  };
}

function Product({  slug } : ProductPageProps) {
  const [product, setProduct] = useState<ProductProps>({
    title: null,
    imageUrl: null,
    content: null,
    author: {
      name: null,
    },
  });

  useEffect(() => {
    (async () => {
      const data = await getProductBySlug(slug);
      if (data) {
        setProduct({
          title: data?.title || null,
          imageUrl: data?.coverImage || null,
          author: {
            name: data?.author?.name || null,
          },
          content: data?.content || null,
        });
      }
    })();
  }, [slug]);

  const heroData = {
    title: product?.title,
    imageUrl: product?.imageUrl,
    author: product?.author?.name,
  };

  return (
    <>
      <ProductHero data={heroData} />
      <ProductContent data={product?.content || ''} />
    </>
  );
}

export default Product;

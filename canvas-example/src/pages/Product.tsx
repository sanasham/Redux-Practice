import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import type { ProductProps } from '../components/product.types';

const Product = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const handleAddToCart = (id: number) => {
    setCart((prevCart) => [...prevCart, id]);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: ProductProps[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <div className='mb-4'>
        <Link to='/' className='text-blue-500 hover:underline'>
          🏠 Home
        </Link>
      </div>
      <h1 className='text-center mt-10 text-2xl font-bold mb-6'>
        Product Dashboard
      </h1>
      {loading && <p>Loading products...</p>}
      {error && <p className='text-red-500'>Error: {error}</p>}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              image={product.image ?? ''}
              brand={product.category ?? 'Unknown'}
              title={product.title}
              price={product.price}
              rating={product.rating?.rate || 0}
              ratingCount={product.rating?.count || 0}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

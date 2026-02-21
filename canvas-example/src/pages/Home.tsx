import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center pt-20 px-4'>
      <div className='max-w-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
          Discover Amazing Products
        </h1>

        <p className='mt-4 text-gray-600 text-lg'>
          Shop the latest fashion and lifestyle products at great prices.
        </p>

        <Link
          to='/products'
          className='inline-block mt-8 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition duration-300'
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

export default Home;

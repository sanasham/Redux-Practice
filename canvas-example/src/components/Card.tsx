import type { CardProps } from './product.types';

const Card = ({
  id,
  image,
  brand,
  title,
  price,
  rating,
  ratingCount,
  onAddToCart,
}: CardProps) => {
  return (
    <div className='bg-white border border-gray-400 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden'>
      {/* Image Section */}
      <div className='bg-gray-100 aspect-square flex items-center justify-center p-4'>
        <img src={image} alt={title} className='max-h-48 object-contain' />
      </div>

      {/* Content */}
      <div className='p-4 flex flex-col flex-grow'>
        <p className='text-xs text-gray-500 uppercase tracking-wide'>{brand}</p>

        <h3 className='mt-1 font-semibold text-gray-900 line-clamp-2 min-h-[48px]'>
          {title}
        </h3>

        <p className='mt-2 text-lg font-bold text-green-600'>${price}</p>

        <div className='flex items-center gap-1 mt-1 text-sm text-gray-600'>
          ⭐ {rating} ({ratingCount} reviews)
        </div>

        {/* Push button to bottom */}
        <button
          onClick={() => onAddToCart(id)}
          className='mt-auto w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-200 font-medium'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;

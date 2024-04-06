import Image from 'next/image';
import ImgProduct from '../public/images/product-modal/headphone.png';
import ImgHeart from '../public/images/product-modal/heart.png';
import ImgWeight from '../public/images/product-modal/weight.png';
export const ProductModal: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row bg-white p-8 shadow-md rounded-md'>
      <div className='flex justify-center min-w-60  mb-4'>
        <Image
          className='w-48 h-40 hover:scale-105 duration-200'
          src={ImgProduct}
          alt=''
        />
      </div>
      <div>
        <span className='bg-black rounded-full px-2 py-1 text-xs text-white'>
          Free shipping
        </span>
        <h2 className='text-black mt-3'>
          Razer Kraken Kitty Edt Gaming Headset Quartz
        </h2>
        <span className='text-gray-400 font-light text-xs line-through'>
          $700
        </span>
        <strong className='text-black font-extrabold text-3xl block mb-4'>
          $599
        </strong>
        <p className='text-xs text-gray-400 mb-4'>
          The offer is valíd unitil Aplil 3 or as long as strock kassi
        </p>

        <div className='group'>
          <button
            className='
            transition-all
          w-full
          bg-blue-500 
          hover:bg-blue-700
          text-white 
          px-8 py-4 
          rounded-md 
          border-b-8 
          group-hover:border-t-8
          hover:border-b-0 
          group-border-t-8 
          border-b-blue-700 
          group-border-t-blue-700 
          group-hover:border-b-blue-700
          group-hover:border-t-blue-500  
          duration-150
          '
          >
            Add to cart
          </button>
        </div>

        <div className='flex flex-row items-center gap-2 group mt-4'>
          <div
            className='
            w-3 
            h-3 
            bg-green-400
            rounded-full  
            group-hover:animate-ping
            cursor-pointer'
          ></div>
          <span className='text-xs text-black font-light my-2 block'>
            50+ pcs in stock
          </span>
        </div>

        <div className='flex flex-col justify-between md:flex-row gap-2 mt-4'>
          <button
            className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md
            shadow-sm
            hover:shadow-lg
          hover:bg-opacity-30 
          hover:translate-y-0.5
          transition-all
          duration-150
          '
          >
            <Image className='w-6 h6' src={ImgWeight} alt='' />
            Add to cart
          </button>
          <button
            className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md
            shadow-sm
            hover:shadow-lg
          hover:bg-opacity-30 
          hover:translate-y-0.5
          transition-all
          duration-150'
          >
            <Image className='w-6 h6' src={ImgHeart} alt='' />
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

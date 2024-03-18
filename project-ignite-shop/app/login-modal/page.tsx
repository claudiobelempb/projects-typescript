import { ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import ImgFacebbok from '../../public/images/login-modal/facebook.png';
import ImgGoogle from '../../public/images/login-modal/google.png';
import ImgBackground from '../../public/images/login-modal/image.jpg';
export default function LoginModal() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* Card Container */}
      <div className='relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0'>
        {/* Left side */}
        <div className='p-6 md:p-20'>
          <h2 className='font-mono mb-5 text-4xl font-bold'>Log In</h2>
          <p className='max-w-sm mb-12 font-sans font-ligth text-gray-600'>
            Log in to your account to upload or dowload pictures, videos or
            misic.
          </p>
          <input
            className='w-full p-6 border-gray-300 rounded-md placehold:font-light'
            placeholder='Enter your email address'
          />

          {/* Middle content */}
          <div className='flex flex-col items-center justify-between md:flex-row mt-6 space-y-6 md:space-y-0'>
            <p className='font-thin text-cyan-700'>Forgot password</p>
            <button className='w-full md:w-auto flex items-center justify-center p-6 space-x-4 font-sans font-bold text-white rounded-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadown-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
              Next <ChevronRight />
            </button>
          </div>

          {/* Border */}
          <div className='mt-12 border-b border-gray-300'></div>

          {/* botton container */}
          <p className='py-6 text-gray-300 text-sm text-center'>
            Or log in with
          </p>

          {/* bottons container */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-2 mt-4'>
            <button className=' flex items-center justify-center gap-2 border border-gray-300 rounded-md px-2 py-3 w-full text-gray-500 hover:translate-y-0.5 transition duration-150 md:w-1/2 hover:text-gray-800 hover:border-gray-800'>
              <Image className='w-10 h-10' src={ImgFacebbok} alt='' /> Facebbok
            </button>
            <button className='flex items-center justify-center gap-2 border border-gray-300 rounded-md px-2 py-3 w-full text-gray-500 hover:translate-y-0.5 transition duration-150 md:w-1/2 hover:text-gray-800 hover:border-gray-800'>
              <Image className='w-10 h-10' src={ImgGoogle} alt='' /> Google
            </button>
          </div>
        </div>
        {/* close button */}
        <button className='group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4'>
          <X />
        </button>
        {/* Right side */}
        <Image
          className='w-[430px] hidden md:block'
          src={ImgBackground}
          alt=''
        />
      </div>
    </div>
  );
}

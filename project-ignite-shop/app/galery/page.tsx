import { Bookmark, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Img1 from '../../public/images/gallery/image1.jpg';
import Img2 from '../../public/images/gallery/image2.jpg';
import Img3 from '../../public/images/gallery/image3.jpg';
import Img4 from '../../public/images/gallery/image4.jpg';
import Img5 from '../../public/images/gallery/image5.jpg';
import Img6 from '../../public/images/gallery/image6.jpg';

export default function GaleryPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-cyan-50'>
      <div className='bg-white p-6 m3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
        {/* menu Container */}
        <nav className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
          <div className='group'>
            <Link href={'#'}>Vector</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href={'#'}>IIustrations</Link>

            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href={'#'}>Images</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
          <div className='group'>
            <Link href={'#'}>Icons</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
          </div>
        </nav>

        {/* Search Container */}
        <div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
          {/* Input Container */}
          <div className='flex items-center md:flex-row justify-between border-b'>
            <input
              type='text'
              className='ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none'
              placeholder='Search'
            />
            <button className='w-8 h-8'>
              <Search className='w-6 h6 text-gray-300' />
            </button>
          </div>

          {/* Upload Button */}
          <button className='bg-black text-white py-3 px-14 text-lg font-normal border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black'>
            Upload
          </button>
        </div>

        {/* Galery Container */}
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='relative group'>
            <Image className='w-72' src={Img1} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <Image className='w-72' src={Img2} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <Image className='w-72' src={Img3} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <Image className='w-72' src={Img4} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <Image className='w-72' src={Img5} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
          <div className='relative group'>
            <Image className='w-72' src={Img6} alt='' />
            <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
              <div className='flex justify-between w-full'>
                <div className='font-normal'>
                  <p className='text-sm'>Abstract Painting</p>
                  <p className='tex-xs'>245 likes - 35 Shares</p>
                </div>
                <div className='flex items-center'>
                  <Bookmark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

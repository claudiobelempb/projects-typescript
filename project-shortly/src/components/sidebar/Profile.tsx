// 'use client';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import ImgAvatar from '../../public/Avatar.svg';

interface ProfilePros {
  onClick?: () => void;
}

export const Profile: React.FC<ProfilePros> = ({ onClick }: ProfilePros) => {
  return (
    <div className='flex gap-3 items-center'>
      <Image
        className='w-10 h-10 rounded-full bg-violet-300'
        src={ImgAvatar}
        alt=''
      />
      <div className='truncate flex flex-col gap-1'>
        <span className='text-sm text-zinc-700 text-left font-semibold'>
          Olivia Rhye
        </span>
        <p className='truncate text-sm text-left font-sm text-zinc-500'>
          olivia@untitledui.com
        </p>
      </div>
      <button
        onClick={onClick}
        type='button'
        className='ml-auto flex justify-center items-center w-8 h-8 hover:bg-zinc-100 rounded-md'
      >
        <LogOut className='w-5 h5 text-zinc-500' />
      </button>
    </div>
  );
};

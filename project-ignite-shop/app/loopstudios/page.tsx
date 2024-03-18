import { ContainerRoot } from '@/components/ContainerRoot';
import {
  NavBarContent,
  NavBarHamburger,
  NavBarItem,
  NavBarRoot
} from '@/components/navi-bar/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import ImgBrand from '../../public/images/loopstudios/logo.svg';

import { ButtonOutline } from '@/components/ButtonRoot';
import { CardGruop, CardRoot } from '@/components/CardRoot';
import {
  HeadingMedium,
  HeadingRoot,
  HeadingSmall
} from '@/components/HeadingRoot';
import { ParagraphRoot } from '@/components/TextRoot';
import ImgInteractive from '../../public/images/loopstudios/desktop/image-interactive.jpg';

import { BoxRoot } from '@/components/BoxRoot';
import { ContentRoot } from '@/components/ContentRoot';
import { GradientRoot } from '@/components/GradienteRoot';
import ImgCardDesk01 from '../../public/images/loopstudios/desktop/image-deep-earth.jpg';
import ImgCardMobile01 from '../../public/images/loopstudios/mobile/image-deep-earth.jpg';

import ImgCardDesk02 from '../../public/images/loopstudios/desktop/image-night-arcade.jpg';
import ImgCardMobile02 from '../../public/images/loopstudios/mobile/image-night-arcade.jpg';

import ImgCardDesk03 from '../../public/images/loopstudios/desktop/image-soccer-team.jpg';
import ImgCardMobile03 from '../../public/images/loopstudios/mobile/image-soccer-team.jpg';

import ImgCardDesk04 from '../../public/images/loopstudios/desktop/image-grid.jpg';
import ImgCardMobile04 from '../../public/images/loopstudios/mobile/image-grid.jpg';

import ImgCardDesk05 from '../../public/images/loopstudios/desktop/image-from-above.jpg';
import ImgCardMobile05 from '../../public/images/loopstudios/mobile/image-from-above.jpg';

import ImgCardDesk06 from '../../public/images/loopstudios/desktop/image-pocket-borealis.jpg';
import ImgCardMobile06 from '../../public/images/loopstudios/mobile/image-pocket-borealis.jpg';

import ImgCardDesk07 from '../../public/images/loopstudios/desktop/image-curiosity.jpg';
import ImgCardMobile07 from '../../public/images/loopstudios/mobile/image-curiosity.jpg';

import { Facebook, Instagram, Twitter } from 'lucide-react';
import ImgCardDesk08 from '../../public/images/loopstudios/desktop/image-fisheye.jpg';
import ImgCardMobile08 from '../../public/images/loopstudios/mobile/image-fisheye.jpg';

export default function LoopstudiosPage() {
  return (
    <>
      {/* Hero Section */}
      <ContainerRoot id='hero'>
        {/* Hero content */}
        <ContentRoot className='max-w-6xl mx-outo px-6 py-12'>
          <BoxRoot className='flex items-center justify-between'>
            {/* menu/logo container */}
            <Link href={'/loopstudios'}>
              <Image src={ImgBrand} alt='' />
            </Link>
            <NavBarRoot>
              <NavBarContent className='hidden md:flex'>
                <NavBarItem isBorderBottom title='Abount' href='#' />
                <NavBarItem isBorderBottom title='Contact' href='#' />
                <NavBarItem isBorderBottom title='Events' href='#' />
                <NavBarItem isBorderBottom title='Products' href='#' />
                <NavBarItem isBorderBottom title='Support' href='#' />

                {/* @todo Hamburger Button */}
              </NavBarContent>
              <NavBarHamburger />
            </NavBarRoot>
          </BoxRoot>
          <BoxRoot
            className='max-w-lg font-sans text-4xl md:text-6xl text-white uppercase border-2 p-10 my-32
          md:pb-10 md:m-32 md:mx-0'
          >
            impressive experiences that deliver
          </BoxRoot>
        </ContentRoot>
      </ContainerRoot>

      {/* Feature Section */}
      <ContainerRoot id='feature'>
        <ContentRoot className='relative container flex flex-col max-w-6xl mx-auto py-32 px-6 text-gray-900 md:flex-row md:px-0'>
          <BoxRoot>
            <Image src={ImgInteractive} alt='' />
          </BoxRoot>
          <BoxRoot className='top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20'>
            <HeadingRoot
              type='h2'
              className='max-w-lg mt-10 mb-6 text-4xl text-center uppercase text-gray-900 md:text-5xl md:mt-0 md:text-left'
            >
              The Leader in interactive vn
            </HeadingRoot>
            <ParagraphRoot className='max-w-md tex-center md:text-left mb-0'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              non quasi doloribus saepe maxime neque, aperiam consequatur
              aspernatur provident rem perspiciatis dolores veritatis maiores
              eligendi suscipit minima, laudantium tempore ut!
            </ParagraphRoot>
          </BoxRoot>
        </ContentRoot>
      </ContainerRoot>

      {/* Creation Section */}
      <ContainerRoot id='creations' className='my-10'>
        <ContentRoot className='flex justify-center mb-20 md:justify-between'>
          <HeadingMedium>Our Creations</HeadingMedium>
          <ButtonOutline className='hidden md:block'>See All</ButtonOutline>
        </ContentRoot>

        <ContentRoot className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8 mx-0'>
          <CardRoot>
            <CardGruop className='overflow-hidden'>
              <Image
                src={ImgCardDesk01}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile01}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                Deep Earth
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk02}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile02}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                Night Arcade
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk03}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile03}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                Socker Team VR
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk04}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile04}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                The Grid
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
        </ContentRoot>
        <ContentRoot className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8 mx-0 mt-10'>
          <CardRoot>
            <CardGruop className='overflow-hidden'>
              <Image
                src={ImgCardDesk05}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile05}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                From Up Above VR
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk06}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile06}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                Procket Borealis
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk07}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile07}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                The Curiosity
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <CardRoot>
            <CardGruop className='overflow-hidden '>
              <Image
                src={ImgCardDesk08}
                alt=''
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              <Image
                src={ImgCardMobile08}
                alt=''
                className='w-full md:hidden'
              />
              <GradientRoot />
              <HeadingSmall className='absolute px-6 duration-200 w-52 text-white bottom-4 md:bottom-8 group-hover:scale-110 group-hover:text-black'>
                Make It Fisheye
              </HeadingSmall>
            </CardGruop>
          </CardRoot>
          <ButtonOutline className='block md:hidden w-full mt-10'>
            See All
          </ButtonOutline>
        </ContentRoot>
      </ContainerRoot>

      <ContainerRoot className='bg-black py-10'>
        <ContentRoot className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
          <BoxRoot className='flex flex-col items-center space-y-8 md:items-start md:space-y-5'>
            <Link className='h-8' href={'/loopstudios'}>
              <Image className='w-44 md:ml-3' src={ImgBrand} alt='' />
            </Link>

            <NavBarRoot className=''>
              <NavBarContent className='h-full flex flex-col items-center space-y-4 font-bold text-white  md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
                <NavBarItem href='#'>Abount</NavBarItem>
                <NavBarItem href='#'>Coreers</NavBarItem>
                <NavBarItem href='#'>Event</NavBarItem>
                <NavBarItem href='#'>Products</NavBarItem>
                <NavBarItem href='#'>Support</NavBarItem>
              </NavBarContent>
            </NavBarRoot>
          </BoxRoot>
          <BoxRoot className='flex flex-col items-center justify-between space-y-4 text-gray-500'>
            <BoxRoot className='w-full flex items-center justify-center space-x-4 md:justify-start'>
              <Link
                className='flex items-center justify-center text-white w-10 h-10'
                href={'#'}
              >
                <Facebook />
              </Link>
              <Link
                className='flex items-center justify-center text-white w-10 h-10'
                href={'#'}
              >
                <Twitter />
              </Link>
              <Link
                className='flex items-center justify-center text-white w-10 h-10'
                href={'#'}
              >
                <Facebook />
              </Link>
              <Link
                className='flex items-center justify-center text-white w-10 h-10'
                href={'#'}
              >
                <Instagram />
              </Link>
            </BoxRoot>
            <ParagraphRoot className='text-center font-bold'>
              &copy; 2024 Loopstudios. All Rights
            </ParagraphRoot>
          </BoxRoot>
        </ContentRoot>
      </ContainerRoot>
    </>
  );
}

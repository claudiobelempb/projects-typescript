import { BoxRoot } from '@/components/BoxRoot';
import { ButtonLink, ButtonRoot, ButtonText } from '@/components/ButtonRoot';
import { ContentRoot } from '@/components/ContentRoot';
import { HeaderRoot } from '@/components/HeaderRoot';
import { Heading3, HeadingLarge } from '@/components/HeadingRoot';
import { ParagraphRoot } from '@/components/TextRoot';
import Image from 'next/image';
// import ImgHeroDescktop from '../../public/images/bg-shorten-desktop.svg';
// import ImgHeroMobile from '../../public/images/bg-shorten-mobile.svg';
import ImgWorking from '../../public/images/illustration-working.svg';

export default function Home() {
  return (
    <>
      <HeaderRoot />
      <ContentRoot className='flex flex-col-reverse mx-auto p-6 lg:flex-row '>
        <BoxRoot className='flex flex-col items-center space-y-10 mb-10 lg:mt-16 xl:mb-52 lg:w-1/2 lg:items-start'>
          <HeadingLarge>More than just shorter links</HeadingLarge>
          <ParagraphRoot>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphRoot>

          <ButtonLink href='#' className=''>
            <ButtonText className='text-white text-xl lg:text-xl'>
              Get Started
            </ButtonText>
          </ButtonLink>
        </BoxRoot>
        <BoxRoot className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
          <Image className='' src={ImgWorking} alt='' />
        </BoxRoot>
      </ContentRoot>
      <ContentRoot className='px-8 py-10 roundend-md '>
        <form className='flex flex-col md:flex-row  gap-4 bg-gray-900 p-8 rounded-md'>
          <input
            className='py-3 px-5 w-full rounded-md placeholder:text-yellow-500'
            type='text'
            placeholder='shorten alink here'
          />
          <ButtonRoot className='rounded-md bg-cyan'>
            <ButtonText className='text-white'>Shorten It!</ButtonText>
          </ButtonRoot>
        </form>
      </ContentRoot>
      <ContentRoot className='flex flex-col lg:flex-row items-center justify-between px-8 py-10 gap-4'>
        <BoxRoot className='flex flex-col'>
          <ParagraphRoot>https://www.frontendmentor.io</ParagraphRoot>
          <div className='w-2 h-2 border-b-gray-400' />
        </BoxRoot>
        <ParagraphRoot>https://rel,ink/k4lkyk</ParagraphRoot>
        <ButtonRoot className='bg-cyan'>
          <ButtonText className='text-white'>Copy</ButtonText>
        </ButtonRoot>
      </ContentRoot>
      <ContentRoot className='flex flex-col lg:flex-row items-center justify-between px-8 py-10 gap-4'>
        <BoxRoot className='flex flex-col'>
          <ParagraphRoot>https://www.frontendmentor.io</ParagraphRoot>
          <div className='w-2 h-2 border-b-gray-400' />
        </BoxRoot>
        <ParagraphRoot>https://rel,ink/k4lkyk</ParagraphRoot>
        <ButtonRoot className='bg-gray-700'>
          <ButtonText className='text-white'>Copy</ButtonText>
        </ButtonRoot>
      </ContentRoot>

      <ContentRoot className='space-y-6 my-10'>
        <Heading3 className='lg:text-center'>Advanced Statistics</Heading3>
        <ParagraphRoot>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          molestias tenetur nihil eveniet minima dicta nostrum quam officiis
          officia aperiam.
        </ParagraphRoot>
      </ContentRoot>
    </>
  );
}

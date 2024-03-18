import { CardHeading, CardRoot, CardText } from '@/components/CardRoot';
import { HeadingRoot } from '@/components/HeadingRoot';
import { ParagraphRoot } from '@/components/TextRoot';
import {
  Eye,
  Facebook,
  Instagram,
  ScrollText,
  SpellCheck,
  Twitter
} from 'lucide-react';
import Image from 'next/image';
import ImgPc from '../../public/images/clipboard/image-computer.png';
import ImgPone from '../../public/images/clipboard/image-devices.png';
import ImgBrand from '../../public/images/clipboard/logo.svg';

import { ButtonGroup, ButtonRoot, ButtonText } from '@/components/ButtonRoot';
import { ContentRoot } from '@/components/ContainerRoot';
import { LinkGroup, LinkRoot } from '@/components/LinkRoot';
import Link from 'next/link';
import ImgCard1 from '../../public/images/clipboard/logo-google.png';
import ImgCard4 from '../../public/images/clipboard/logo-hp.png';
import ImgCard2 from '../../public/images/clipboard/logo-ibm.png';
import ImgCard3 from '../../public/images/clipboard/logo-microsoft.png';
import ImgCard5 from '../../public/images/clipboard/logo-vector-graphics.png';

export default function ClipBoard() {
  return (
    <div className='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
      <Image className='mx-auto my-16' src={ImgBrand} alt='' />

      <ContentRoot>
        <HeadingRoot type='h3'>A history of everything yor copy.</HeadingRoot>
        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam,
          dignissimos aliquid quae nemo ipsum? Quos laborum illo iste voluptatem
          rem eius nesciunt amet magnam possimus, quas ex impedit! Illum.
        </ParagraphRoot>
      </ContentRoot>

      <LinkGroup>
        <LinkRoot href={'#'} className=' rounded-full bg-strongCyan'>
          <ButtonText className='text-white'>Download for iOS</ButtonText>
        </LinkRoot>
        <LinkRoot href={'#'} className='rounded-full bg-lighBlue '>
          <ButtonText className='text-white'>Download for Mac</ButtonText>
        </LinkRoot>
      </LinkGroup>

      <ContentRoot>
        <HeadingRoot className='mt-8' type='h3'>
          Kepp track of your snippets
        </HeadingRoot>
        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam,
          dignissimos aliquid quae nemo ipsum? Quos laborum illo iste voluptatem
          rem eius nesciunt amet magnam possimus, quas ex impedit! Illum.
        </ParagraphRoot>
      </ContentRoot>

      {/* Features Section */}

      <ContentRoot className='grid grid-cols-1 md:grid-cols-2 relative gap-4'>
        <div className=''>
          <Image className='md:absolute top-0 right-[50%]' src={ImgPc} alt='' />
        </div>
        <div className='pl-4'>
          <CardRoot>
            <HeadingRoot className='mb-1' type='h4'>
              Quick Search
            </HeadingRoot>
            <ParagraphRoot className='text-sm mb-1 md:text-left'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              ad enim odio rem cupiditate delectus? Temporibus reiciendis quam
              iure nisi rerum reprehenderit inventore, dolore accusantium optio
              molestiae. Voluptas, culpa eveniet?
            </ParagraphRoot>
          </CardRoot>
          <CardRoot>
            <HeadingRoot className='mb-1' type='h4'>
              Quick Search
            </HeadingRoot>
            <ParagraphRoot className='text-sm mb-1 md:text-left'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio
              officiis eligendi neque fugiat dolores fugit esse iure, quas
              magnam.
            </ParagraphRoot>
          </CardRoot>
          <CardRoot>
            <HeadingRoot className='mb-1' type='h4'>
              Quick Search
            </HeadingRoot>
            <ParagraphRoot className='text-sm mb-1 md:text-left'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, ipsam!
            </ParagraphRoot>
          </CardRoot>
        </div>
      </ContentRoot>

      <ContentRoot>
        <HeadingRoot type='h3'>Access Clipboard anywhre</HeadingRoot>
        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          deleniti!
        </ParagraphRoot>

        <Image src={ImgPone} alt='' />
      </ContentRoot>

      <ContentRoot>
        <HeadingRoot type='h3'>Supercharge your workflow</HeadingRoot>
        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ParagraphRoot>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <CardRoot>
            <ScrollText className='w-10 h-10 text-grayishBlue' />
            <CardHeading>Create backlists</CardHeading>
            <CardText>Lorem ipsum dolor sit amet. </CardText>
          </CardRoot>
          <CardRoot>
            <SpellCheck className='w-10 h-10 text-grayishBlue' />
            <CardHeading>Plaln text snippes</CardHeading>
            <CardText>Lorem ipsum dolor sit amet. </CardText>
          </CardRoot>
          <CardRoot>
            <Eye className='w-10 h-10 text-grayishBlue' />
            <CardHeading>Sneak preview</CardHeading>
            <CardText>Lorem ipsum dolor sit amet. </CardText>
          </CardRoot>
        </div>
      </ContentRoot>

      <ContentRoot className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl px-10 mx-auto space-y-16 my-44 md:space-y-0'>
        <CardRoot>
          <Image src={ImgCard1} alt='' />
        </CardRoot>
        <CardRoot>
          <Image src={ImgCard2} alt='' />
        </CardRoot>
        <CardRoot>
          <Image src={ImgCard3} alt='' />
        </CardRoot>
        <CardRoot>
          <Image src={ImgCard4} alt='' />
        </CardRoot>
        <CardRoot>
          <Image src={ImgCard5} alt='' />
        </CardRoot>
      </ContentRoot>

      <ContentRoot>
        <HeadingRoot type='h3'>Clipboard for iOS and MacOS</HeadingRoot>
        <ParagraphRoot className='mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          rerum.
        </ParagraphRoot>
      </ContentRoot>

      <ContentRoot className='my-20'>
        <ButtonGroup>
          <ButtonRoot className='rounded-full bg-strongCyan'>
            <ButtonText className='text-white'>Download for iOS</ButtonText>
          </ButtonRoot>
          <ButtonRoot className='rounded-full bg-lighBlue '>
            <ButtonText className='text-white'>Download for Mac</ButtonText>
          </ButtonRoot>
        </ButtonGroup>
      </ContentRoot>
      <footer className='flex flex-row items-center gap-3 bg-gray-50'>
        <Image className='w-10 h-10' src={ImgBrand} alt='' />
        <nav className='w-full flex flex-row gap-3'>
          <Link href={'#'}>FAQS</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Install Quide</Link>
          <Link href={'#'}>Contact Us</Link>
          <Link href={'#'}>Press Kit</Link>
        </nav>
        <nav className='flex flex-row items-center justify-end gap-3'>
          <Link href={'#'}>
            <Facebook className='w-10 h-10 bg-grayishBlue rounded-md p-2 fill-white text-white' />
          </Link>
          <Link href={'#'}>
            <Twitter className='w-10 h-10  rounded-md fill-grayishBlue text-grayishBlue' />
          </Link>
          <Link href={'#'}>
            <Instagram className='w-10 h-10 e rounded-md  text-grayishBlue' />
          </Link>
        </nav>
      </footer>
    </div>
  );
}

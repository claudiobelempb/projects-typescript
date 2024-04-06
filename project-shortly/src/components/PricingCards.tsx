type PricingCardsProps = {
  title: string;
  qtd: string;
  type: 'GB' | 'TB';
  price: string;
  active?: boolean;
};
export const PricingCards: React.FC<PricingCardsProps> = ({
  title,
  qtd,
  type,
  price,
  active
}) => {
  return (
    <div className={`p-2 ${active && 'bg-violet-500 '} bg-gray-500 rounded-md`}>
      <div className='bg-gray-700 rounded-md w-52'>
        <div className='flex flex-col items-center p-8'>
          <h2 className='text-white uppercase mb-3'>{title}</h2>
          <h5 className='text-white text-5xl font-serif uppercase'>
            {qtd}
            {type}
          </h5>
          <span className='text-white text-xs'>${price}/month</span>
          <button
            className={`px-4 py-2 border
               hover:bg-violet-500 
             border-violet-500 text-white text-xs rounded-md mt-4 mb-5 duration-200 ${
               active && 'bg-violet-500 '
             } `}
          >
            Purchase
          </button>
        </div>
        <div className='w-full h-0.5 bg-gray-500' />
        <ul className='flex flex-col gap-1 items-center text-xs text-white p-5'>
          <li className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-check'
            >
              <path d='M20 6 9 17l-5-5' />
            </svg>
            {qtd} {type} storage
          </li>
          <li className='flex items-center gap-2'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-check'
            >
              <path d='M20 6 9 17l-5-5' />
            </svg>
            Option to add members
          </li>
          <li className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-check'
            >
              <path d='M20 6 9 17l-5-5' />
            </svg>
            Extra member benefits
          </li>
        </ul>
      </div>
    </div>
  );
};

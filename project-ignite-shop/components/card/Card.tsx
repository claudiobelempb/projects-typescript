import Image from 'next/image';
import ImgBen from '../../public/ben.jpg';
export const Card = () => {
  return (
    <div className='flex flex-col bg-blue-900 w-full justify-start items-center p-3 md:p-0 rounded-sm md:justify-center md:items-center md:flex-row'>
      <Image
        className='w-20 h-20 md:min-w-40 md:h-auto bg-white rounded-full my-2 sm:my-0 md:rounded-none '
        width={100}
        height={100}
        src={ImgBen}
        alt=''
      />

      <div className='flex flex-1 flex-col w-full text-white text-center p-4 gap-2 md:justify-center  md:text-left'>
        <p>
          "Benjamin Franklin nasceu em Milk Street, Boston. O seu pai, Josiah
          Franklin, era comerciante de velas de cera, e casou duas vezes.
          Benjamin foi o 17.º filho de 20 crianças nascidas dos dois
          casamentos."
        </p>
        <h4 className='text-blue-400'>Benjamin Franklin</h4>
        <p className='text-gray-900 '>Política, EUA</p>
      </div>
    </div>
  );
};

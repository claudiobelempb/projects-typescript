import { ChevronDown } from 'lucide-react';
import { ElementType } from 'react';

interface NavItemProps {
  url: string;
  title: string;
  icon: ElementType;
}
export const NavItem: React.FC<NavItemProps> = ({
  url,
  title,
  icon: Icon
}: NavItemProps) => {
  return (
    <a
      href={url}
      className='group flex items-center gap-3 py-2 px-3 hover:bg-violet-50'
    >
      <Icon className='h-5 w-5 text-zinc-500' />
      <span className='font-medium text-zinc-700 group-hover:text-violet-500'>
        {title}
      </span>
      <ChevronDown className='ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300' />
    </a>
  );
};

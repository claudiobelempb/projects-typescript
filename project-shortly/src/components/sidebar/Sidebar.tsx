'use client';
import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers3,
  LifeBuoy,
  Search,
  Settings,
  Users
} from 'lucide-react';
import Image from 'next/image';
import LogoMark from '../../public/Logomark.svg';
import { NavItem } from './NavItem';
import { Profile } from './Profile';
import { UserSpaceWidget } from './UserSpaceWidget';

export function Sidebar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 '>
      <div className='flex items-center gap-2'>
        <Image width={25} height={25} src={LogoMark} alt='' />
        <span className='text-xl font-semibold text-zinc-900 '>
          Untitled UI
        </span>
      </div>
      <div className='flex w-full items-center gap-2 border border-zinc-300 rounded-lg px-2 py-2 shadow-sm'>
        <Search className='w-5 h-5 text-zinc-500' />
        <input
          className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-800'
          type='search'
          placeholder='Search'
        />
      </div>
      <nav className='space-y-0 5'>
        <NavItem url='/' title='Home' icon={Home} />
        <NavItem url='/dashboard' title='Dashboard' icon={BarChart2} />
        <NavItem url='/projects' title='Projects' icon={Layers3} />
        <NavItem url='/tasks' title='Tasks' icon={CheckSquare} />
        <NavItem url='/reporting' title='Reporting' icon={Flag} />
        <NavItem url='/users' title='Users' icon={Users} />
      </nav>
      <div className='flex flex-col gap-6 mt-auto'>
        <nav className='space-y-0.5'>
          <NavItem url='/support' title='Support' icon={LifeBuoy} />
          <NavItem url='/settings' title='Settings' icon={Settings} />
        </nav>
      </div>
      <UserSpaceWidget />
      <div className='h-px bg-zinc-200' />
      <Profile onClick={() => alert(99)} />
    </aside>
  );
}

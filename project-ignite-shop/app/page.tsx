import { ProductModal } from '@/components/ProductModal';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col md:flex-row items-center justify-center  p-24 gap-2 bg-zinc-200'>
      <ProductModal />
    </main>
  );
}

import { CategoriesComponent } from 'components/categories-component';

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export default function HomePages() {
  const categories: Category[] = [
    {
      id: '416438da-ddc7-4627-9975-bdf50869bce4',
      title: 'Hats',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 'f18d272b-a4f3-41e4-b4b6-c22b40184ca4',
      title: 'Jackets',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: '7a5bb0dd-b408-426c-bc75-66b22f4cb407',
      title: 'Sneakers',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: '0218d4ea-bec2-4983-81f7-91eee0302fad',
      title: 'Womens',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 'f264fc70-2615-4dbf-80da-566864ccdf7e',
      title: 'Mens',
      subtitle: 'Shop Now',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];
  return (
    <>
      <CategoriesComponent categories={categories} />
    </>
  );
}

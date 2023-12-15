import { Category } from 'pages/HomePage';
import { CategoryItem } from './item-component';

type Props = {
  categories: Category[];
};

export const CategoriesComponent = ({ categories }: Props) => {
  return (
    <>
      {categories.map(category => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </>
  );
};

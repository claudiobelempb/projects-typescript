import { Category } from 'pages/HomePage';

import * as Styles from './styles';

export const CategoryItem = ({ ...category }: Category) => {
  return (
    <Styles.Box className='large' as='article'>
      <Styles.Image url={`${category.imageUrl}`} />
      <Styles.BoxContent>
        <Styles.Heading as='h2'>{category.title}</Styles.Heading>
        <Styles.Text>{category.subtitle}</Styles.Text>
      </Styles.BoxContent>
    </Styles.Box>
  );
};

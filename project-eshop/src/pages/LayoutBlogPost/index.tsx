import * as Styles from './styles';

import Img01 from 'assets/images/css-grid/7.1.jpg';
import Img02 from 'assets/images/css-grid/7.2.jpg';
import Img03 from 'assets/images/css-grid/7.3.jpg';
import Img04 from 'assets/images/css-grid/7.4.jpg';
import Img05 from 'assets/images/css-grid/7.5.jpg';
import Img06 from 'assets/images/css-grid/7.6.jpg';
import { ButtonDefault } from 'components/common/ButtonDefault';

export default function LayoutBlogPost() {
  return (
    <>
      <Styles.Container as='section'>
        <Styles.Content>
          <Styles.Box as='article'>
            <img src={Img01} alt='' />
            <Styles.Heading as='h2'>Blog Post 1</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
          <Styles.Box as='article'>
            <img src={Img02} alt='' />
            <Styles.Heading as='h2'>Blog Post 2</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
          <Styles.Box as='article'>
            <img src={Img03} alt='' />
            <Styles.Heading as='h2'>Blog Post 3</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
          <Styles.Box as='article'>
            <img src={Img04} alt='' />
            <Styles.Heading as='h2'>Blog Post 4</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
          <Styles.Box as='article'>
            <img src={Img05} alt='' />
            <Styles.Heading as='h2'>Blog Post 5</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
          <Styles.Box as='article'>
            <img src={Img06} alt='' />
            <Styles.Heading as='h2'>Blog Post 5</Styles.Heading>
            <Styles.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              nemo a rerum nesciunt asperiores numquam. Dignissimos maxime
              cupiditate deleniti deserunt nobis voluptatibus quaerat,
              obcaecati, facere, voluptas voluptatem perferendis accusantium!
              Assumenda.
            </Styles.Text>
            <ButtonDefault
              backgroundColor='orange600'
              textColor='white'
              onClick={() => alert('Click')}
              title='Head More'
            />
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
    </>
  );
}

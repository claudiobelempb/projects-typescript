import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import { FaClock, FaCss3Alt, FaShapes, FaTh, FaUpload } from 'react-icons/fa';
import * as Styles from './styles';

export default function LayoutServices() {
  return (
    <Styles.Container as='main'>
      <HeadingDefault as='h6' textColor='blue500'>
        Our Services
      </HeadingDefault>
      <HeadingDefault as='h2'>What We Offer</HeadingDefault>
      <TextDefault>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        temporibus quod odio accusamus debitis maxime.
      </TextDefault>

      <Styles.Content>
        <Styles.Box>
          <Styles.IconContent>
            <FaShapes />
          </Styles.IconContent>
          <HeadingDefault as='h3'>Refreshing Design</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
        <Styles.Box>
          <Styles.IconContent>
            <FaCss3Alt />
          </Styles.IconContent>
          <HeadingDefault as='h3'>Based on CSS</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
        <Styles.Box>
          <Styles.IconContent>
            <FaShapes />
          </Styles.IconContent>
          <HeadingDefault as='h3'>100+ Components</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
        <Styles.Box>
          <Styles.IconContent>
            <FaClock />
          </Styles.IconContent>
          <HeadingDefault as='h3'>Speed Optimized</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
        <Styles.Box>
          <Styles.IconContent>
            <FaTh />
          </Styles.IconContent>
          <HeadingDefault as='h3'>Fully Customizable</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
        <Styles.Box>
          <Styles.IconContent>
            <FaUpload />
          </Styles.IconContent>
          <HeadingDefault as='h3'>Regular Updates</HeadingDefault>
          <TextDefault>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit
          </TextDefault>
        </Styles.Box>
      </Styles.Content>
    </Styles.Container>
  );
}

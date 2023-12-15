import Img01 from 'assets/images/22.jpg';
import { ImgDefault } from 'components/common/ImgDefault';
import { LinkDefault } from 'components/common/LinkDefault';
import * as Styles from './styles';

export default function LayoutProductCard() {
  return (
    <Styles.Container as='section'>
      <Styles.ProductCard as='article'>
        <ImgDefault src={Img01} alt='' />
        <Styles.ProductCardInfor>
          <Styles.ProductCardPrice>$ 1200</Styles.ProductCardPrice>
          <Styles.ProductCardTitle>Mountain Bike</Styles.ProductCardTitle>
          <Styles.ProductCardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Styles.ProductCardDescription>
          <LinkDefault
            basis={{ value: 40 }}
            justify='flex-start'
            title='Add to card'
            target='_self'
            href='/card'
            backgroundColor='green600'
          />
        </Styles.ProductCardInfor>
      </Styles.ProductCard>
      <Styles.ProductCard as='article'>
        <ImgDefault src={Img01} alt='' />
        <Styles.ProductCardInfor>
          <Styles.ProductCardPrice>$ 1200</Styles.ProductCardPrice>
          <Styles.ProductCardTitle>Mountain Bike</Styles.ProductCardTitle>
          <Styles.ProductCardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            illo doloremque deserunt animi obcaecati cum similique provident
            quaerat voluptate, cumque asperiores, labore minima harum
            praesentium error atque quam maiores eos.
          </Styles.ProductCardDescription>
          <LinkDefault
            backgroundColor='green600'
            title='Add to card'
            target='_self'
            href='/card'
          />
        </Styles.ProductCardInfor>
      </Styles.ProductCard>
      <Styles.ProductCard as='article'>
        <ImgDefault src={Img01} alt='' />
        <Styles.ProductCardInfor>
          <Styles.ProductCardPrice>$ 1200</Styles.ProductCardPrice>
          <Styles.ProductCardTitle>Mountain Bike</Styles.ProductCardTitle>
          <Styles.ProductCardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            illo doloremque deserunt animi obcaecati cum similique provident
            quaerat voluptate, cumque asperiores, labore minima harum
            praesentium error atque quam maiores eos.
          </Styles.ProductCardDescription>
          <LinkDefault
            title='Add to card'
            target='_self'
            href='/card'
            basis={{ value: 40 }}
            justify='flex-end'
            backgroundColor='green600'
          />
        </Styles.ProductCardInfor>
      </Styles.ProductCard>
    </Styles.Container>
  );
}

import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useCart } from '@hooks/useCard';
import { useEffect, useState } from 'react';

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};
export function CardProductMolecules({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity(state => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <BoxAtoms
      $width={{ $maxWidth: 23, $minWidth: 23 }}
      $height={{ $minHeight: 31 }}
      $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
      $background={{ $background: 'card' }}
      $border={{
        $radiusBottomLeft: { $width: 3 },
        $radiusTopRight: { $width: 3 }
      }}
      $space={{ $py: 's10', $mb: 'l32' }}
    >
      <BoxAtoms
        $position={{ position: 'absolute', top: -40 }}
        $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
      >
        <ImageAtoms width={120} src={coffee.image} alt={coffee.title} />
      </BoxAtoms>
      <BoxAtoms
        $flex={{
          $flexDirection: 'row',
          $columnGap: 1,
          $justifyContent: 'center'
        }}
        $space={{ $px: 's10' }}
      >
        {coffee.tags.map(tag => (
          <TextAtoms
            key={tag}
            $background={{ $background: 'yellow100' }}
            $color={{ $text: 'yellow700' }}
            $font={{ $fsize: 's10', $fcolor: 'yellow700', $fweigh: '700' }}
            $border={{ $radius: { $borderWidth: 50 } }}
            $space={{ $p: 's5' }}
            $text={{ $textTransform: 'uppercase' }}
          >
            {tag}
          </TextAtoms>
        ))}
      </BoxAtoms>
      <HeadingAtoms
        $font={{ $fsize: 'm20', $ffamily: 'Baloo' }}
        $space={{ $mb: 's8' }}
      >
        {coffee.title}
      </HeadingAtoms>
      <TextAtoms
        $font={{ $fsize: 's14' }}
        $text={{ $textAlign: 'center' }}
        $space={{ $mb: 'm16' }}
      >
        {coffee.description}
      </TextAtoms>
      <BoxAtoms
        $flex={{ $flexDirection: 'row', $columnGap: 0.5 }}
        $position={{ position: 'absolute', bottom: 16 }}
        $space={{ $py: 'm16' }}
      >
        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $columnGap: 0.5
          }}
        >
          <TextAtoms $font={{ $fsize: 's14' }} as='span'>
            R$
          </TextAtoms>
          <TextAtoms $font={{ $fsize: 'm24', $fweigh: '700' }} as='span'>
            {coffee.price.toFixed(2)}
          </TextAtoms>
        </BoxAtoms>

        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $alingItems: 'center',
            $columnGap: 0.5
          }}
          $background={{ $background: 'button' }}
          $border={{ $radius: { $borderWidth: 5 } }}
        >
          <ButtonAtoms
            onClick={decrementQuantity}
            $width={{ $minWidth: 3 }}
            $height={{ $minHeight: 3 }}
            // $space={{ $p: 's5' }}
            $flex={{ $justifyContent: 'center' }}
            $background={{ $background: 'transparent' }}
            $color={{ $text: 'purple700', $hover: 'purple700' }}
          >
            <IconAtom size={14} type='FaMinus' $font={{ $fsize: 's14' }} />
          </ButtonAtoms>
          <TextAtoms>{quantity}</TextAtoms>
          <ButtonAtoms
            onClick={incrementQuantity}
            $width={{ $minWidth: 3 }}
            $height={{ $minHeight: 3 }}
            // $space={{ $p: 's5' }}
            $flex={{ $justifyContent: 'center' }}
            $background={{ $background: 'transparent' }}
            $color={{ $text: 'purple700', $hover: 'purple700' }}
          >
            <IconAtom size={14} type='FaPlus' />
          </ButtonAtoms>
        </BoxAtoms>
        <ButtonAtoms
          onClick={handleAddItem}
          $width={{ $minWidth: 3 }}
          $height={{ $minHeight: 3 }}
          $background={{ $background: 'purple700' }}
          $color={{ $text: 'white', $hover: 'purple700' }}
          // $space={{ $p: 's5' }}
          $flex={{ $justifyContent: 'center' }}
        >
          <IconAtom type='FaShoppingCart' />
        </ButtonAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}

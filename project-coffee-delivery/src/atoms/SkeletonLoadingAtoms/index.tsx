import { typeDefault } from '@typesDefault/typesDefault';
import {} from 'react';
import { SketetonContainer, SketetonContent } from './styles';
type Props = {
  $lines?: number;
  $height?: number;
  $spacings?: number;
} & typeDefault;
export function SkeletonLoadingAtoms({
  $lines,
  $height,
  $spacings,
  ...props
}: Props) {
  return (
    <SketetonContainer $spacings={$spacings || 6}>
      {[...Array($lines || 5)].map((_, index) => (
        <SketetonContent
          $background={{ $background: 'green100' }}
          key={index}
          $height={{ $height: $height || 2 }}
          $border={{ $radius: { $borderWidth: 5 } }}
        ></SketetonContent>
      ))}
    </SketetonContainer>
  );
}

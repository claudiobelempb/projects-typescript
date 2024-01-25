import { typeDefault } from '@typesDefault/typesDefault';
import { SketetonContainer, SketetonContent } from './styles';

export function SkeletonLoadingAtoms({
  $spacings,
  $lines,
  $height,
  $background
}: typeDefault) {
  return (
    <SketetonContainer $spacings={$spacings}>
      {[...Array($lines || 5)].map((_, index) => (
        <SketetonContent
          $background={$background}
          key={index}
          $height={$height}
          $border={{ $radius: { $borderWidth: 5 } }}
        ></SketetonContent>
      ))}
    </SketetonContainer>
  );
}

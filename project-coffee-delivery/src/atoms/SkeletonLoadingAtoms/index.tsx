import { typeDefault } from '@typesDefault/typesDefault';
import {} from 'react';
import { SketetonContainer, SketetonContent } from './styles';

export function SkeletonLoadingAtoms({ ...props }: typeDefault) {
  return (
    <SketetonContainer $spacings={props.$spacings || 6} {...props}>
      {[...Array(props.$lines || 5)].map((_, index) => (
        <SketetonContent
          $background={{ $background: 'green100' }}
          key={index}
          $height={props.$height}
          $border={{ $radius: { $borderWidth: 5 } }}
        ></SketetonContent>
      ))}
    </SketetonContainer>
  );
}

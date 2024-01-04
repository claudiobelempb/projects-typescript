import { typeDefault } from '@typesDefault/typesDefault';
import { ImgHTMLAttributes } from 'react';

import { Container } from './styles';
type Props = ImgHTMLAttributes<HTMLImageElement> & typeDefault;
export function ImageAtoms({ ...props }: Props) {
  return <Container {...props} />;
}

import { typeDefault } from '@typesDefault/typesDefault';
import { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & typeDefault;
export function ImageAtoms({ ...props }: Props) {
  return <img {...props} />;
}

import { ColorType } from './ColorType';

export type BackgroundImgType = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  backgroundAttachment?:
    | 'fixed'
    | 'scroll'
    | 'inherit'
    | 'initial'
    | 'local'
    | 'revert-layer'
    | 'unset'
    | 'revert';
  backgroundSize?:
    | 'auto'
    | 'contain'
    | 'cover'
    | 'inherit'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  backgroundPosition?:
    | 'bottom'
    | 'center'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'right'
    | 'top'
    | 'revert-layer'
    | 'unset'
    | 'revert';
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  url?: string;
  defaultColor?: ColorType;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: number;
};

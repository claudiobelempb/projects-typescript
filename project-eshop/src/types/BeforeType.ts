import { ColorType } from './ColorType';

export type BeforeType = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  backgroundImg?: string;
  backgroundColor?: ColorType;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: number;
  isEffect?: boolean;
  value?: number[];
  transitionValue?: number[];
  unit?: 'px' | 'rem' | '%' | 'vw' | 'vh';
  transform?:
    | 'transform'
    | 'none'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'
    | 'scale'
    | 'rotate'
    | 'rotate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'translateX'
    | 'translate'
    | 'translate3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'scale'
    | 'scale3d'
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'skew'
    | 'skewX'
    | 'skewY';
  transitionProperty?:
    | 'none'
    | 'all'
    | 'height'
    | 'color'
    | 'background'
    | 'transform'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  element?:
    | 'none'
    | 'all'
    | 'height'
    | 'color'
    | 'background-color'
    | 'background'
    | 'img'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  transitionDuration?: number;
  transitionTimingFunction?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  transformOrigin?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
  transitionDelay?: number;
  secondsDuration?: 's' | 'sm';
  secondsDelay?: 's' | 'sm';
};

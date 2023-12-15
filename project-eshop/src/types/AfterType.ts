import { ColorType } from './ColorType';

export type TypeAfterValue = {
  /* Function values */
  matrix?: (...value: number[]) => void;
  matrix3d?: (...value: number[]) => void;
  perspective?: (valueNumber: number, valueString: string) => void;
  rotate?: (value: number | string) => void;
  rotate3d?: (...value: number[]) => void;
  rotateX?: (value: number) => void;
  rotateY?: (value: number) => void;
  rotateZ?: (value: number) => void;
  translate?: (...value: number[]) => void;
  translate3d?: (...value: number[]) => void;
  translateX?: (value: number) => void;
  translateY?: (value: number) => void;
  translateZ?: (value: number) => void;
  scale?: 'scale';
  scale3d?: (...value: number[]) => void;
  scaleX?: (value: number) => void;
  scaleY?: (value: number) => void;
  scaleZ?: (value: number) => void;
  skew?: (...value: number[]) => void;
  skewX?: (value: number) => void;
  skewY?: (value: number) => void;

  /* Multiple function values */
  transformMult?: TypeAfterValue[];
  // transform: translateX(10px) rotate(10deg) translateY(5px);
  // transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

  /* Global values */
  globalValues?:
    | 'none'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
};

export type TypeAfter = {
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

/*
  after?: () => FlattenSimpleInterpolation;

  after={props.after}

  ${props.after && props.after()}

*/

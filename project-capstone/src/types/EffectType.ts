import { ColorType } from './ColorType';

export type TransFormType = {
  /* Function values */
  matrix?: (...value: number[]) => void;
  matrix3d?: (...value: number[]) => void;
  perspective?: (valueNumber: number, valueString: string) => void;
  rotate?: (value?: number | string) => void;
  rotate3d?: (...value: number[]) => void;
  rotateX?: (value: number) => void;
  rotateY?: (value: number) => void;
  rotateZ?: (value: number) => void;
  translate?: (...value: number[]) => void;
  translate3d?: (...value: number[]) => void;
  translateX: (value: number) => number;
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
  transformMult?: TransFormType[];
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

type EffectType = {
  transformValue?: number[];
  translateValueX?: number[];
  translateValueY?: number[];
  tranHover?: number[];
  tranValue?: number[];
  transformArray?: number;
  rotate?: number | string;
  transformOrigin?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'center'
    | 'initial'
    | 'unset'
    | 'unset'
    | 'revert'
    | 'inherit';

  color?: ColorType;
  transformUnit?: 'px' | 'rem' | '%' | 'vw' | 'vh' | 'deg';
  transform?:
    | 'scale'
    | 'translateX'
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
  translateX?:
    | 'scale'
    | 'translateX'
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
  translateY?:
    | 'scale'
    | 'translateX'
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
    | 'a'
    | 'img'
    | 'p'
    | 'color'
    | 'background-color'
    | 'background'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';
  isElement?: boolean;
  transitionDuration?: number;
  secondsDuration?: 's' | 'sm';
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
  transitionDelay?: number;
  secondsDelay?: 's' | 'sm';
};

export type TypeEffectProps = {
  effect?: EffectType;
  effectHover?: EffectType;
  effectHoverBefore?: EffectType;
  effectHoverAfter?: EffectType;
  effectRotate?: number | string;
  effectTranslateX?: number | string;
  effectTranslateY?: number | string;
};

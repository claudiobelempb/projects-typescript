import { typeDefault } from '@typesDefault/typesDefault';
import {
  Fa500Px,
  FaBoxOpen,
  FaCircle,
  FaCoffee,
  FaExclamationTriangle,
  FaHistory,
  FaMapMarkerAlt,
  FaMinus,
  FaPlay,
  FaPlus,
  FaRegClock,
  FaRegStopCircle,
  FaShoppingCart
} from 'react-icons/fa';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

type IconAtomProps = {
  weight?: IconWeight;
  color?: string;
  size?: number;
  type?:
    | 'FaHistory'
    | 'FaRegClock'
    | 'Fa500Px'
    | 'FaPlus'
    | 'FaMinus'
    | 'FaPlay'
    | 'FaCircle'
    | 'FaRegStopCircle'
    | 'FaExclamationTriangle'
    | 'FaShoppingCart'
    | 'FaCoffee'
    | 'FaBoxOpen'
    | 'FaMapMarkerAlt';
} & typeDefault;

export function IconAtom({ type, color, size = 18 }: IconAtomProps) {
  switch (type) {
    case 'FaHistory':
      return <FaHistory size={size} color={color} />;
    case 'FaRegClock':
      return <FaRegClock size={size} color={color} />;
    case 'FaPlus':
      return <FaPlus size={size} color={color} />;
    case 'FaMinus':
      return <FaMinus size={size} color={color} />;
    case 'FaPlay':
      return <FaPlay size={size} color={color} />;
    case 'FaCircle':
      return <FaCircle size={size} color={color} />;
    case 'FaRegStopCircle':
      return <FaRegStopCircle size={size} color={color} />;
    case 'FaExclamationTriangle':
      return <FaExclamationTriangle size={size} color={color} />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt size={size} color={color} />;
    case 'FaShoppingCart':
      return <FaShoppingCart size={size} color={color} />;
    case 'FaCoffee':
      return <FaCoffee size={size} color={color} />;
    case 'FaBoxOpen':
      return <FaBoxOpen size={size} color={color} />;
    default:
      return <Fa500Px size={size} color={color} />;
  }
}

import { typeDefault } from '@typesDefault/typesDefault';
import {
  Fa500Px,
  FaCircle,
  FaHistory,
  FaMinus,
  FaPlay,
  FaPlus,
  FaRegClock,
  FaRegStopCircle
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
    | 'FaRegStopCircle';
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
    default:
      return <Fa500Px size={size} color={color} />;
  }
}

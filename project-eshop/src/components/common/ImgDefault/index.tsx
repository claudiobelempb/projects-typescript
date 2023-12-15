import { ImgHTMLAttributes } from 'react';

import { AppType } from 'types/AppType';
import * as Styles from './Img.module';

type ImgDefaultProps = ImgHTMLAttributes<HTMLImageElement>;

type ImgDefaultType = ImgDefaultProps & AppType;

const ImgDefault: React.FC<ImgDefaultType> = ({ ...props }) => {
  return (
    <Styles.FigureDefaultContainer {...props}>
      <Styles.ImgDefaultContainer {...props} loading='lazy' />
    </Styles.FigureDefaultContainer>
  );
};

export { ImgDefault };

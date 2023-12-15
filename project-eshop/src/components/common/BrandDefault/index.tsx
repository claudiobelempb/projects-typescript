import React from 'react';
import { Link } from 'react-router-dom';
// import BrandImg from '../../../assets/images/logo.svg';

import { ImgDefault } from '../ImgDefault';

import { AppType } from 'types/AppType';
import * as Styles from './Brand.module';

const BrandDefault: React.FC<AppType> = ({ ...props }) => {
  return (
    <Styles.BrandDefaultStyle {...props}>
      <Link to={props.url ? props.url : '/'}>
        {props.children}
        <ImgDefault width={20} alt='Git Collection' />
      </Link>
    </Styles.BrandDefaultStyle>
  );
};

export { BrandDefault };

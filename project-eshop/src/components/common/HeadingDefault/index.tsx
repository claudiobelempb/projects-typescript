import { AppType } from 'types/AppType';
import * as Styles from './Heading.module';

const HeadingDefault: React.FC<AppType> = ({ children, ...props }) => {
  switch (props.as) {
    case 'h1':
      return <Styles.ContainerH1 {...props}>{children}</Styles.ContainerH1>;
    case 'h2':
      return <Styles.ContainerH2 {...props}>{children}</Styles.ContainerH2>;
    case 'h3':
      return <Styles.ContainerH3 {...props}>{children}</Styles.ContainerH3>;
    case 'h4':
      return <Styles.ContainerH4 {...props}>{children}</Styles.ContainerH4>;
    case 'h5':
      return <Styles.ContainerH5 {...props}>{children}</Styles.ContainerH5>;
    case 'h6':
      return <Styles.ContainerH6 {...props}>{children}</Styles.ContainerH6>;
    default:
      return <Styles.ContainerH1 {...props}>{children}</Styles.ContainerH1>;
  }
};

export { HeadingDefault };

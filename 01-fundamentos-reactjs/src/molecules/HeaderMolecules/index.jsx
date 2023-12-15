import BrandImage from '../../assets/brand.svg';
import { ContentTemplates } from '../../templates/ContentTemplates';
import styles from './header.module.css';

export function HeaderMolecules() {
  return (
    <ContentTemplates isWidth>
      <header className={styles.headerContainer}>
        <img src={BrandImage} />
      </header>
    </ContentTemplates>
  );
}

import styles from './styles.module.css';

export function AvatarAtoms({ src, isBorder = false }) {
  return (
    <img
      src={src}
      className={`${isBorder ? styles.isBorder : false} ${styles.avatar}`}
    />
  );
}

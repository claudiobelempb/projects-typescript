import styles from './styles.module.css';

export function BoxTemplates({
  children,
  isFlex,
  alignContent,
  alignItems,
  isDirection,
  columnGap,
  rowGap,
  isHeight,
  maxWidth,
  padding,
  marginTop,
  marginBottom,
  borderRadius,
  backgroundColor
}) {
  return (
    <div
      className={styles.boxContainer}
      style={{
        flexDirection: isDirection ? 'row' : 'column',
        flex: isFlex ? 0 : isFlex,
        alignContent: alignContent && alignContent,
        alignItems: alignItems && alignItems,
        maxWidth: maxWidth ? `${maxWidth}rem` : '100%',
        width: '100%',
        columnGap: columnGap && `${columnGap}rem`,
        rowGap: rowGap && `${rowGap}rem`,
        height: isHeight ? '100%' : 'auto',
        padding: padding && `${padding}rem`,
        borderRadius: borderRadius && `${borderRadius}px`,
        marginTop: marginTop && `${marginTop}rem`,
        marginBottom: marginBottom && `${marginBottom}rem`,
        backgroundColor: backgroundColor && backgroundColor,
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
}

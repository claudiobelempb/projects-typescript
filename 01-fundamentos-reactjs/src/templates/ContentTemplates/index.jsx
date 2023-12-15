import stryles from './styles.module.css';
export function ContentTemplates({
  children,
  isWidth,
  isFlex,
  isDirection,
  columnGap,
  isHeight,
  maxWidth,
  padding,
  marginTop
}) {
  return (
    <div
      className={stryles.container}
      style={{
        flexDirection: isDirection ? 'row' : 'column',
        flex: isFlex ? 1 : isFlex,
        maxWidth: maxWidth ? '100%' : `${maxWidth}rem`,
        width: isWidth ? '100%' : '90%',
        columnGap: columnGap && `${columnGap}rem`,
        height: isHeight ? '100%' : 'auto',
        padding: padding && padding,
        marginTop: marginTop && `${marginTop}rem`
      }}
    >
      {children}
    </div>
  );
}

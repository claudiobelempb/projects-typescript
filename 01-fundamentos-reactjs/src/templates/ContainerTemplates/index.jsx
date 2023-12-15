import stryles from './styles.module.css';
export function ContainerTemplates({ children }) {
  return <div className={stryles.container}>{children}</div>;
}

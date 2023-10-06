import styles from './container.module.css';

/* eslint-disable-next-line */
export interface ContainerProps {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return <div className={styles['container']}>{props.children}</div>;
}

export default Container;

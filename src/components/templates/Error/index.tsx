import { ReactNode, VFC } from 'react';
import styles from './style.module.scss';

export type ErrorProps = {
  children: ReactNode
}

const Error: VFC<ErrorProps> = ({
  children,
}) => (
  <main className={styles.main}>
    { children }
  </main>
);

export default Error;

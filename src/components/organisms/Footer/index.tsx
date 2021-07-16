import { VFC } from 'react';
import styles from './style.module.scss';

const Footer: VFC = () => (
  <footer className={styles.footer}>
    <span className={styles.copyOnWrite}>© 2021 shikky</span>
  </footer>
);

export default Footer;

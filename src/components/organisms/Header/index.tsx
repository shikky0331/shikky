import { VFC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Header: VFC = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo}>Shikky</Link>
    <nav>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link to="/">Blog</Link>
        </li>
        <li className={styles.item}>
          <a
            href="https://github.com/shikky0331"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://twitter.com/shikky0331"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

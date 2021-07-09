import { VFC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Blog: VFC = () => (
  <>
    <main className={styles.main}>
      <article className={styles.post}>
        <h3 className={styles.h3}><Link to="https://shikky0331.github.io/shikky/">How Are Function Components Different from Classes?</Link></h3>
        <small>February 13, 2021</small>
        <p className={styles.p}>This is my 5th blog post</p>
      </article>
      <article className={styles.post}>
        <h3 className={styles.h3}><Link to="https://shikky0331.github.io/shikky/">forth blog post</Link></h3>
        <small>March 23, 2021</small>
        <p className={styles.p}>This is my 4th blog post</p>
      </article>
      <article className={styles.post}>
        <h3 className={styles.h3}><Link to="https://shikky0331.github.io/shikky/">third blog post</Link></h3>
        <small>April 4, 2021</small>
        <p className={styles.p}>This is my 3th blog post</p>
      </article>
      <article className={styles.post}>
        <h3 className={styles.h3}><Link to="https://shikky0331.github.io/shikky/">second blog post</Link></h3>
        <small>May 30, 2021</small>
        <p className={styles.p}>This is my 2th blog post</p>
      </article>
      <article className={styles.post}>
        <h3 className={styles.h3}><Link to="https://shikky0331.github.io/shikky/">first blog post</Link></h3>
        <small>July 30, 2021</small>
        <p className={styles.p}>This is my 1th blog post</p>
      </article>
    </main>
    <footer className={styles.footer}>
      <span className={styles.copyOnWrite}>© 2021 shikky</span>
    </footer>
  </>
);

export default Blog;

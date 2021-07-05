import { VFC } from 'react';
import styles from 'components/templates/Blog/style.module.scss';
import { Link } from 'react-router-dom';

const Blog: VFC = () => (
  <main className={styles.main}>
    <article>
      <article className={styles.post}>
        <h3><Link to="https://shikky0331.github.io/shikky/">fifth blog post</Link></h3>
        <small>February 13, 2021</small>
        <p>This is my 5th blog post</p>
      </article>
      <article className={styles.post}>
        <h3><Link to="https://shikky0331.github.io/shikky/">forth blog post</Link></h3>
        <small>March 23, 2021</small>
        <p>This is my 4th blog post</p>
      </article>
      <article className={styles.post}>
        <h3><Link to="https://shikky0331.github.io/shikky/">third blog post</Link></h3>
        <small>April 4, 2021</small>
        <p>This is my 3th blog post</p>
      </article>
      <article className={styles.post}>
        <h3><Link to="https://shikky0331.github.io/shikky/">second blog post</Link></h3>
        <small>May 30, 2021</small>
        <p>This is my 2th blog post</p>
      </article>
      <article className={styles.post}>
        <h3><Link to="https://shikky0331.github.io/shikky/">first blog post</Link></h3>
        <small>July 30, 2021</small>
        <p>This is my 1th blog post</p>
      </article>
    </article>
  </main>
);

export default Blog;

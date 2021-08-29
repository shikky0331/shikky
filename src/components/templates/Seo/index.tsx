import { VFC } from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title?: string
  description?: string
  url?: string
  ogType?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

const Seo: VFC<SeoProps> = ({
  title,
  description,
  url,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,
}) => (
  <Helmet
    defaultTitle="Shikky"
    titleTemplate="%s | Shikky"
  >
    <title>{title}</title>
    <link rel="canonical" href="https://shikky0331.github.io/shikky" />
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta property="og:url" content={`https://shikky0331.github.io/shikky${url}`} />
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content="Shikky" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@shikky0331" />
  </Helmet>
);

export default Seo;

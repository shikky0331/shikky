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
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
  </Helmet>
);

export default Seo;

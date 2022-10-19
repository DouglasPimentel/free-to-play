import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SeoProps = {
  lang?: string;
  title: string;
  description?: string;
};

type DataType = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};

const Seo = ({ lang = "pt-br", title, description }: SeoProps) => {
  const data: DataType = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
    </Helmet>
  );
};

export default Seo;

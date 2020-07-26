import React from 'react'
import { StaticQuery, graphql} from 'gatsby'
import { Helmet } from 'react-helmet'


export const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || ["gatsby blog", "gatsby MDX"]

        return (
          <Helmet
            title= {title}
            meta={[
                { name: "description",
                  content: metaDescription,
              },
                { propery: "og:title",
                  content: metaTitle,
              },
                { propery: "og:description",
                  content: metaDescription,
              },
                { propery: "og:type",
                  content: "website",
              },
                { propery: "og:image",
                  content: metaImage,
              },
                { propery: "og:url",
                  content: metaUrl,
              },
                { propery: "twitter:card",
                  content: "summary_large_image",
              },
                { propery: "twitter:creator",
                  content: metaAuthor,
              },
                { propery: "twitter:title",
                  content: metaTitle,
              },
                { propery: "twitter:description",
                  content: metaDescription,
              },
                { propery: "twitter:image",
                  content: metaImage,
              },
              ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                  name: 'keywords',
                  content: metaKeywords.join(', '),
                } : []
              )}
              />
          )
      }}
      />
    )
}

const detailsQuery = graphql`
  query DefaulySEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`

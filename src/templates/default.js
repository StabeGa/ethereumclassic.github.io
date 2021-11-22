import { graphql } from "gatsby";

import LayoutGlobal from "../components/globalLayout";
import Content from "../components/content";

export default function DefaultTempalte(props) {
  return (
    <LayoutGlobal {...props}>
      <Content {...props} />
    </LayoutGlobal>
  );
}

export const pageQuery = graphql`
  query MDXQuery($basePath: String!, $mdxSlug: String) {
    mdx(slug: { eq: $mdxSlug }) {
      body
      toc: tableOfContents
      excerpt(pruneLength: 199, truncate: false)
      headings(depth: h1) {
        value
      }
      meta: frontmatter {
        title
        license
        description
        date
        author
        contribute
        contributors
        updated
      }
    }
    contributors: allContributorAvatar(filter: { page: { eq: $basePath } }) {
      edges {
        node {
          githubId
          locale
          localImage {
            childImageSharp {
              gatsbyImageData(
                width: 40
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

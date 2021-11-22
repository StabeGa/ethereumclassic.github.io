import { graphql } from "gatsby";
import React from "react";

import GlobalLayout from "../components/globalLayout";
import Landing from "../components/landing";

export default function LayoutLanding(props) {
  return (
    <GlobalLayout {...props}>
      <Landing {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  query {
    newsItems: allNewsItem(limit: 5, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          date
          author
          source
          link
          title
          blog
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

export interface IndexPageProps {
  location: Location;
}

interface QueryProps extends IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IndexPage = ({ data, location }: QueryProps) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <article></article>
    </Layout>
  );
};

export default IndexPage;

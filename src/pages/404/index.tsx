import React from "react";
import Wrapper from "../../components/Wrapper";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Pagina niet gevonden" />
    <Wrapper>
      <article>
        <h1>Deze pagina bestaat niet</h1>
        <p>Jammer, laten we iets anders proberen.</p>
      </article>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;

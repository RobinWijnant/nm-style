import React from "react";

import Layout from "../components/Layout2";
import SEO from "../components/seo2";

export interface NotFoundPageProps {
  location: Location;
}

const NotFoundPage = ({ location }: NotFoundPageProps) => (
  <Layout location={location}>
    <SEO title="Pagina niet gevonden" />
    <article>
      <h1>Deze pagina bestaat niet</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </article>
  </Layout>
);

export default NotFoundPage;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../reset.css";
import "../../index.css";
import Wrapper from "../../components/Wrapper";

type Props = {
  location: Location;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Wrapper>
      <Header />
    </Wrapper>
    <main>{children}</main>
    <Wrapper>
      <Footer />
    </Wrapper>
  </>
);

export default Layout;

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../reset.css";
import "../../index.css";
import Wrapper from "../../components/Wrapper";
import RebrandingModal from "../../components/RebrandingModal";
import Modal from "react-modal";
import * as facebook from "../../utils/facebook";

type Props = {};

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const Layout: React.FC<Props> = ({ children }) => {
  const [isRebrandingModalOpen, setIsRebrandingModalOpen] = React.useState(
    false,
  );

  useEffect(() => {
    Modal.setAppElement("#___gatsby");
    const urlParams = new URLSearchParams(window.location.search);
    const referralName = urlParams.get("referral");

    if (referralName === "benna") {
      setIsRebrandingModalOpen(true);

      if (typeof window !== "undefined") {
        window.document.body.style.overflow = "hidden";
      }
    }

    // Init Facebook SDK
    if (typeof window !== "undefined") {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: facebook.appId,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v9.0",
        });
      };
      window.fbAsyncInit();
    }
  }, []);

  const closeRebrandingModal = () => {
    setIsRebrandingModalOpen(false);

    if (typeof window !== "undefined") {
      window.document.body.style.overflow = "initial";
    }
  };

  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <main>{children}</main>
      <RebrandingModal
        isOpen={isRebrandingModalOpen}
        onRequestClose={closeRebrandingModal}
      />
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;

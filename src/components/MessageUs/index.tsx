import React from "react";

type Props = {};

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const facebookAppId = "2871611773123745";
const facebookPageId = "102944285141055";

const MessageUs: React.FC<Props> = () => {
  if (typeof window !== "undefined") {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: facebookAppId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v9.0",
      });
    };
  }

  return (
    <>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/nl_BE/sdk.js"
      />

      <div
        className="fb-messengermessageus"
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        messenger_app_id={facebookAppId}
        page_id={facebookPageId}
        color="white"
        size="standard"
      />
    </>
  );
};

export default MessageUs;

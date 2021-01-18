import { FluidObject } from "gatsby-image";

export interface CmsDocument {
  layout: string;
}

export interface Article extends CmsDocument {
  layout: "article";
  date: string;
  title: string;
  description: string;
  facebookUrl: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface AppointmentInfo extends CmsDocument {
  layout: "home-appointment";
  title: string;
  description: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface PageIntro extends CmsDocument {
  layout: "blog-intro" | "priceList-intro" | "reviews-intro";
  title: string;
  description?: string;
  thumbnail?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

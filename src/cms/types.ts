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

export interface ServiceCategory extends CmsDocument {
  layout: "service-category";
  title: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  services: Service[];
}

export interface Service {
  name: string;
  price: string;
}

export interface Banner {
  layout: "products-banner";
  title: string;
  description?: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface ProductPageSection {
  layout: "products-block1";
  title: string;
  description: string;
}

export interface ProductPageSectionWithImage {
  layout: "products-block2" | "products-block3";
  title: string;
  description: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

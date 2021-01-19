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
  layout: "blog-intro" | "prices-intro" | "reviews-intro";
  title: string;
  description?: string;
  thumbnail?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface ServiceCategory extends CmsDocument {
  layout: "prices-categories";
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

export interface CallToAction extends CmsDocument {
  layout: "prices-cta" | "reviews-cta";
  title: string;
  description: string;
}

export interface Banner extends CmsDocument {
  layout: "products-banner";
  title: string;
  description?: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface ProductPageSection extends CmsDocument {
  layout: "products-block1";
  title: string;
  description: string;
}

export interface ProductPageSectionWithImage extends CmsDocument {
  layout: "products-block2" | "products-block3";
  title: string;
  description: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface Review extends CmsDocument {
  layout: "reviews-reviews";
  title: string;
  description: string;
  images: {
    childImageSharp: {
      fluid: FluidObject;
    };
  }[];
}

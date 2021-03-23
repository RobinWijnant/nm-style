import { FluidObject } from "gatsby-image";

export interface CmsDocument {
  layout: string;
}

export interface Notice extends CmsDocument {
  layout: "home-notice";
  enabled: string;
  notice: string;
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

export interface AboutInfo extends CmsDocument {
  layout: "about-about";
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  title: string;
  description: string;
}

export interface TimeLineItem extends CmsDocument {
  layout: "about-timeline";
  time: string;
  title: string;
  description: string;
}

export interface ContactInfo extends CmsDocument {
  layout: "/contact/contact/";
  address_1: string;
  address_2: string;
  phone: string;
  email: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface OpenHours extends CmsDocument {
  layout: "contact-openHours";
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

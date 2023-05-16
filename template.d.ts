type NavBarType = {
  name: string;
  logo: string; // URL?
};

type HeroType = {
  logo: string; // URL?
  heading: string;
  video: string; // URL?
}

type AboutType = {
  name: string;
  heading: string;
  content: string;
  image: string; // URL?
}

type SlideshowType = {
  heading: string;
  images: {
    image: string; // URL?
  };
}

type CardType = {
  heading: string;
  content: string;
  image: string;
  list?: [string];
}

type ResidencesType = {
  content: string;
  pdf: string;
  cards: [CardType]
}

type AmenitiesType = {
  heading: string;
  cards: [CardType]
}

type InfoType = {
  heading: string;
  content: string;
  images: {
    image: string; // URL?
  };
}

type RowType = {
  values: {
    content: string
  }[];
  pdf: string;
}

type AvailabilityType = {
  headings: {
    heading: string;
  }[];
  rows: [RowType]
}

type InquireType = {
  logo: string;
  email: string;
  phone: string;
  address: string;
  names: {
      name: string;
    }[];
  prices: {
    range: string;
  }[];
}

type FooterType = {
  logos: {
    image: string;
  }[]
}

export interface Template {
  NavBar: NavBarType;
  Hero: HeroType;
  About: AboutType;
  Slideshow: SlideshowType;
  Residences: ResidencesType;
  Amenities: AmenitiesType;
  Info: InfoType;
  Availability: AvailabilityType;
  Inquire: InquireType;
  Footer: FooterType;
}
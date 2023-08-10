import data from "@/data/sampleData";
import { NavBar } from "@/components/NavBar/NavBar";
import { HeroBlock } from "@/components/HeroBlock";
import { AboutBlock } from "@/components/AboutBlock";
import { SlideshowBlock } from "@/components/SlideshowBlock";
import { ResidencesBlock } from "@/components/ResidencesBlock";
import { AmenitiesBlock } from "@/components/AmenitiesBlock";
import { InfoBlock } from "@/components/InfoBlock";
import { AvailabilityBlock } from "@/components/AvailabilityBlock";
import { InquireBlock } from "@/components/InquireBlock";
import { Footer } from "@/components/Footer";
import { useScrolledOffset } from "@/lib/useScrolledOffset";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import { Template } from "template";

// export default function Index({sections}) {
export default function Index() {
  // const { navbar, hero, about, slideshow, residences, amenities, info, availability, inquire, footer } = sections;
  const isScrolled = useScrolledOffset(400);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <NavBar
        // name={navbar.name} // string
        // logo={navbar.logo} // string
        links={data.NavBar.links}
        menuLinks={data.NavBar.menuLinks}
        logo={data.NavBar.logo}
        scrolled={isScrolled}
      />
      <HeroBlock
        // logo={hero.logo} // string
        // header={hero.header} // string
        // video={hero.video} // string
        logo={data.Hero.logo}
        tagline={data.Hero.text}
        videoSrc={data.Hero.video}
        scrolled={isScrolled}
      />
      <AboutBlock
        // name={about.name} // string
        // header={about.header} // string
        // content={about.content} // string
        // image={about.image} // string
        img={data.About.img}
        links={data.About.links}
        title={data.About.title}
        text={data.About.text}
      />
      <SlideshowBlock
        // header={slideshow.header} // string
        // images={slideshow.images} // string[]
        images={data.Slideshow.images}
        text={data.Slideshow.text}
      />
      <ResidencesBlock
        // content={residences.content} // string
        // pdf={residences.pdf} // string
        // cards={residences.cards} // card[]
        factSheet={data.Residences.factSheet}
        cards={data.Residences.cards}
        textCard={data.Residences.textCard}
        split={false}
      />
      <AmenitiesBlock
        // header={amenities.header} // string
        // card={amenities.cards} // card[]
        cards={data.Amenities.cards}
        text={data.Amenities.text}
        split={true}
      />
      <InfoBlock
        // header={info.header} // string
        // content={info.content} // string
        // images={info.images} // string[]
        companyName={data.Info.name}
        title={data.Info.title}
        text={data.Info.text}
        topImg={data.Info.topImgSrc}
        botImg={data.Info.botImgSrc}
      />
      <AvailabilityBlock
        // Still need to figure out how this data will be structured
        data={data.Availability.data}
      />
      <InquireBlock
        //  logo={inquire.logo} // string
        //  email={inquire.email} // string
        //  phone={inquire.phone} // string
        //  address={inquire.address} // string
        //  names={inquire.names} // string[]
        //  prices={inquire.prices} // string[]
        contact={data.Inquire.contact}
        form={data.Inquire.form}
      />
      <Footer
        // logos={footer.logos} // string[]
        text={data.Footer.text}
        logos={data.Footer.logos}
        pdf={data.Footer.pdf}
      />
    </>
  );
}

// export const getStaticProps: GetStaticProps<{
//   sections: Template;
// }> = async () => {
//   const res = await fetch(""); //`${process.env.NEXT_PUBLIC_WP_URL}/graphql`
//   const sections: Template = await res.json();

//   if (!sections) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       sections,
//     },
//   };
// };

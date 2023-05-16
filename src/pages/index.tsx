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
  const isScrolled = useScrolledOffset(400);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <NavBar
        links={data.NavBar.links}
        menuLinks={data.NavBar.menuLinks}
        logo={data.NavBar.logo}
        scrolled={isScrolled}
      />
      <HeroBlock
        logo={data.Hero.logo}
        tagline={data.Hero.text}
        videoSrc={data.Hero.video}
        scrolled={isScrolled}
      />
      <AboutBlock
        img={data.About.img}
        links={data.About.links}
        title={data.About.title}
        text={data.About.text}
      />
      <SlideshowBlock
        images={data.Slideshow.images}
        text={data.Slideshow.text}
      />
      <ResidencesBlock
        factSheet={data.Residences.factSheet}
        cards={data.Residences.cards}
        textCard={data.Residences.textCard}
        split={false}
      />
      <AmenitiesBlock
        cards={data.Amenities.cards}
        text={data.Amenities.text}
        split={true}
      />
      <InfoBlock
        companyName={data.Info.name}
        title={data.Info.title}
        text={data.Info.text}
        topImg={data.Info.topImgSrc}
        botImg={data.Info.botImgSrc}
      />
      <AvailabilityBlock data={data.Availability.data} />
      <InquireBlock contact={data.Inquire.contact} form={data.Inquire.form} />
      <Footer
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

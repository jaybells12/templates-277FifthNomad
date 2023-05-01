import sampleData from "@/data/sampleData";
import { FunctionComponent } from "react";
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

export const Template277FN: FunctionComponent<any> = (props: any) => {
  const isScrolled = useScrolledOffset(600);
  return (
    <>
      <NavBar
        links={sampleData.navLinks}
        menuLinks={sampleData.navMenuLinks}
        logoSrc={sampleData.navLogo}
        scrolled={isScrolled}
      />
      <HeroBlock
        logo={sampleData.logo}
        tagline={sampleData.CTATagline}
        videoSrc={sampleData.videoSrc}
        scrolled={isScrolled}
      />
      <AboutBlock
        img={sampleData.aboutBlock.img}
        links={sampleData.aboutBlock.links}
        title={sampleData.aboutBlock.title}
        text={sampleData.aboutBlock.text}
      />
      <SlideshowBlock
        images={sampleData.slideshowBlock.images}
        text={sampleData.slideshowBlock.text}
      />
      <ResidencesBlock
        factSheet={sampleData.residenceBlock.factSheet}
        cards={sampleData.residenceBlock.cards}
        textCard={sampleData.residenceBlock.textCard}
        splitVariant={false}
      />
      <AmenitiesBlock
        cards={sampleData.amenitiesBlock.cards}
        text={sampleData.amenitiesBlock.text}
        splitVariant={true}
      />
      <InfoBlock
        companyName={sampleData.companyName}
        title={sampleData.infoBlock.title}
        text={sampleData.infoBlock.text}
        topImg={sampleData.infoBlock.topImgSrc}
        botImg={sampleData.infoBlock.botImgSrc}
      />
      <AvailabilityBlock data={sampleData.availabilityBlock.data} />
      <InquireBlock
        contact={sampleData.inquireBlock.contact}
        form={sampleData.inquireBlock.form}
      />
      <Footer
        text={sampleData.footer.text}
        logos={sampleData.footer.logos}
        pdf={sampleData.footer.pdf}
      />
    </>
  );
};

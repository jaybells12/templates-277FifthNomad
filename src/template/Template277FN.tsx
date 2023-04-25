import sampleData from "@/data/sampleData";
import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { Hero } from "@/components/Hero";
import { AboutBlock } from "@/components/AboutBlock";
import { SlideshowBlock } from "@/components/SlideshowBlock";
import { ResidencesBlock } from "@/components/ResidencesBlock";
import { AmenitiesBlock } from "@/components/AmenitiesBlock";
import { InfoBlock } from "@/components/InfoBlock";
import { AvailabilityBlock } from "@/components/AvailabilityBlock";

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <NavBar links={sampleData.navLinks} logoSrc={sampleData.navLogo} />
      <Hero
        logoSrc={sampleData.logo}
        tagline={sampleData.CTATagline}
        videoSrc={sampleData.videoSrc}
      />
      <AboutBlock
        imgSrc={sampleData.aboutBlock.imgSrc}
        links={sampleData.aboutBlock.links}
        title={sampleData.aboutBlock.title}
        text={sampleData.aboutBlock.text}
      />
      <SlideshowBlock
        images={sampleData.slideshow}
        text={sampleData.slideshowTag}
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
        title={sampleData.infoBlock.title}
        text={sampleData.infoBlock.text}
        topImg={sampleData.infoBlock.topImgSrc}
        botImg={sampleData.infoBlock.botImgSrc}
      />
      <AvailabilityBlock data={sampleData.availabilityBlock.data} />
    </>
  );
};

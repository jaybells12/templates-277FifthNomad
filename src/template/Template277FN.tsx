import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { Hero } from "@/components/Hero";
import { AboutBlock } from "@/components/AboutBlock";
import { Carousel } from "@/components/Carousel";
import { LinksBlock } from "@/components/LinksBlock";
import { VideoBlock } from "@/components/VideoBlock";
import sampleData from "@/data/sampleData";
import { TextBar } from "@/components/TextBar";
import { Slideshow } from "@/components/Slideshow";
import { CallToAction } from "@/components/CallToAction";
import { CarouselControls } from "@/components/CarouselControls";
import { ResidencesBlock } from "@/components/ResidencesBlock";

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
        description={sampleData.aboutBlock.description}
        header={sampleData.aboutBlock.title}
        imageSrc={sampleData.aboutBlock.imgSrc}
        links={sampleData.aboutBlock.links}
      />
      <Slideshow
        images={sampleData.slideshow}
        tagline={sampleData.slideshowTag}
      />
      <ResidencesBlock
        factSheet={sampleData.residenceBlock.factSheet}
        cards={sampleData.residenceBlock.cards}
        textCard={sampleData.residenceBlock.textCard}
      />
    </>
  );
};

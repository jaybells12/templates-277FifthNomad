import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel";
import { LinksBlock } from "@/components/LinksBlock";
import { VideoBlock } from "@/components/VideoBlock";
import sampleData from "@/data/sampleData";
import { TextBar } from "@/components/TextBar";
import { Slideshow } from "@/components/Slideshow";
import { CallToAction } from "@/components/CallToAction";

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <NavBar links={sampleData.navLinks} logoSrc={sampleData.navLogo.src} />
      <Hero
        logoSrc={sampleData.logo.src}
        videoSrc={sampleData.videoSrc}
        tagline={sampleData.CTATagline}
      />
    </>
  );
};

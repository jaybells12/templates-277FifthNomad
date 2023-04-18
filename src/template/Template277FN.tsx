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

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <AboutBlock
        description={sampleData.aboutBlock.description}
        header={sampleData.aboutBlock.title}
        imageSrc={sampleData.aboutBlock.imgSrc}
        links={sampleData.aboutBlock.links}
      />
    </>
  );
};

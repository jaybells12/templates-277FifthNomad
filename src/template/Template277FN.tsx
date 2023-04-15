import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { Carousel } from "@/components/Carousel";
import sampleData from "@/data/sampleData";
import { TextBar } from "@/components/TextBar";
import { Slideshow } from "@/components/Slideshow";

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <NavBar />
      <Slideshow
        tagline={sampleData.slideshowTag}
        images={sampleData.slideshow}
      />
    </>
  );
};

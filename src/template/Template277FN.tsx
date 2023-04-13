import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { CarouselCard } from "@/components/CarouselCard/CarouselCard";
import sampleData from "@/data/sampleData";

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <NavBar />
      <CarouselCard
        src={sampleData.cardsData[0].image.src}
        title={sampleData.cardsData[0].title}
        description={sampleData.cardsData[0].description}
        features={sampleData.cardsData[0].features}
      />
    </>
  );
};

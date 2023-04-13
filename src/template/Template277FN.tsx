import { FunctionComponent } from "react";
import { NavBar } from "@/components/NavBar/NavBar";
import { CarouselCard } from "@/components/CarouselCard/CarouselCard";

export const Template277FN: FunctionComponent<any> = (props: any) => {
  return (
    <>
      <NavBar />
      <CarouselCard
        src="test"
        title="test"
        description="testing"
        features={["one", "two", "three"]}
      />
    </>
  );
};

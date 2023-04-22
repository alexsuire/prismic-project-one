import React from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "@/components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section>


    <div className="flex-row justify-center mt-10">
      <RichText
        field={slice.primary.title}
        className="font-audiowide text-black font-bold uppercase text-8xl mb-8 text-center"
      />

      <RichText
        field={slice.primary.description}
        className="font-audiowide text-black font-light text-2xl text-center"
      />
    </div>

    <div className="flex flex-col justify-center items-center
    mt-10">
      <PrismicNextImage field={slice?.primary?.image} />
    </div>

  </section>
);

export default HeroSlice;

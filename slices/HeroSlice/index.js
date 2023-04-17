import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '@/components/RichText'


/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section>
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <PrismicNextImage
       field={slice.primary.image}
       className="object-cover"
       fill
       />

  <div className='absolute bottom-1/3 px-10'>
    <RichText
    field={slice.primary.title}
    className='text-red-800 font-bold uppercase text-4x1'
    />

    <RichText
    field={slice.primary.description}
    className='mt-2 text-1g font-semibold uppercase text-white'
    />

  </div>
    
   

  </section>
)

export default HeroSlice
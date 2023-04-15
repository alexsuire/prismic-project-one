import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import RichText from '@/components/RIchText'







/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="section ">
    <div className='container'>
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} className='text-3xl font-bold' />
      <RichText field={slice.primary.description} className='font-bold bg-red-500'/>
      <PrismicRichText field={slice.primary.description} className='text-gray-300'/>
      <div className='text-red-200'/>
      <PrismicNextImage field={slice.primary.image}/>

    </div>

  </section>
)

export default HeroSlice
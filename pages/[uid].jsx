import Head from 'next/head'
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Navigation } from "../components/Navigation";


export default function Page({  metaTitle, metaDescription, navigation, page }) {
  return (
    <>
    <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      
    <div>
      <Navigation navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getByUID('navigation', 'header');
  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      navigation,
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}

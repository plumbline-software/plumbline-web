import { sanityClient } from 'sanity:client';
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

// Content lives in Sanity (studio-plumbline-software/). Pages are prerendered, so these queries run at
// build time and new content goes live on the next deploy. Shared documents are fetched once per build.

export const settings = await sanityClient.fetch(`*[_id == "siteSettings"][0]`);

export const services: {
	name: string;
	slug: string;
	summary: string;
	description: string;
	detail: string;
	bullets: string[];
}[] = await sanityClient.fetch(
	`*[_type == "service" && defined(slug.current)] | order(order asc){ name, "slug": slug.current, summary, description, detail, "bullets": coalesce(bullets, []) }`,
);

export const stages = await sanityClient.fetch(`*[_type == "stage"] | order(order asc)`);

/** One page document by its fixed id (see the Studio's structure.ts). */
export async function getPage(id: string) {
	const page = await sanityClient.fetch(`*[_id == $id][0]`, { id });
	if (!page) throw new Error(`Sanity document "${id}" is missing or unpublished`);
	return page;
}

const builder = createImageUrlBuilder(sanityClient);
/** Serves WebP/AVIF to browsers that accept them. */
export const urlFor = (source: SanityImageSource) => builder.image(source).auto('format');
/** Exact format, for link-preview crawlers that may not handle WebP. */
export const fixedUrlFor = (source: SanityImageSource) => builder.image(source);

/** Original pixel size, read from the asset id (image-<hash>-2000x1333-webp). */
export function imageSize(image: { asset: { _ref: string } }) {
	const [, width, height] = image.asset._ref.match(/-(\d+)x(\d+)-/) ?? [];
	return { width: Number(width), height: Number(height) };
}

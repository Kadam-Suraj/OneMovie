import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'biuzzupd',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

export async function getMovie() {
    const Movie = await client.fetch('*[_type == "movie"]')
    return Movie
}
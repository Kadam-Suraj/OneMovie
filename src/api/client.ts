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

export async function getEpisodes(slug: any) {
    const Episode = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]{episodes}`)
    return Episode
}

export async function getEpHD(slug: any) {
    const EpHD = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]{episodes}`)
    let data: any
    EpHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

export async function getEpFHD(slug: any) {
    const EpFHD = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]{episodes}`)
    let data: any
    EpFHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

export async function getEpUHD(slug: any) {
    const EpUHD = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]{episodes}`)
    let data: any
    EpUHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

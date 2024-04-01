import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'biuzzupd',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


// Image URI
const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
    return builder.image(source)
}

// ScreenShots
export async function getScreenshots(source: any) {
    const Images = await client.fetch(`*[_type == "movie" && slug.current == "${source}"]{gallery}`)
    // console.log(Images)
    let Screenshot = []
    Images.map((item: any) => {
        const image = item.gallery.map((item: any) => {
            return [urlFor(item).url()]
        })
        Screenshot = [...image]
        // console.log(Screenshot)
    })
    return Screenshot
}


// Get Data
export async function getProfile() {
    const Profile = await client.fetch('*[_type == "profile"]')
    return Profile
}
export async function getMovie() {
    const Movie = await client.fetch('*[_type == "movie"] | order(releaseDate desc)') // Newest Released Date

    // const Movie = await client.fetch('*[_type == "movie"]') // default order
    return Movie
}

export async function getMovieBySlug(slug: any) {
    const Movie = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]`)
    return Movie
}

export async function getGenres(slug: any) {
    const Genres = await client.fetch(`*[_type == "movie" && slug.current == "${slug}"]{genres}`)
    return Genres
}

export async function getAllGenres() {
    const Genres = await client.fetch(`array::unique(*[_type == "movie"]{
        "genres": genres[]
    }[].genres[])
    `)
    let data = Genres.filter(value => value !== null)
    return data
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

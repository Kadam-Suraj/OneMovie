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

// Search Movie by user input
export async function search(parameter: any) {
    const Response = await client.fetch(`*[_type == "movie" && title match ".*${parameter}*." || genres match ".*${parameter}*." || status match ".*${parameter}*." || slug match ".*${parameter}*." || type match ".*${parameter}*." || origin match ".*${parameter}*." || tags match ".*${parameter}*."]`)
    return Response
}

// Search by platfrom i.e Netflix, Amazon Prime, Disney+ Hotstar etc
// get All the platforms without duplicate values
export async function getPlatforms() {
    const Platforms = await client.fetch(`array::unique(*[_type in ["movie", "series"]]{
        "platform": platform[]
      }[].platform[])`)
    let data = Platforms.filter((value: any) => value !== null)
    data.sort()
    return data
}

// get Data by platform
export async function searchByPlatform(platform: any) {
    const Platform = await client.fetch(`
    *[_type in ["movie", "series"] && "${platform}" in platform] | order(releaseDate desc)
    `)
    // *[_type in ["movie", "series"] && "${platform}" in platform] 
    return Platform
}

// get Data About Site
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

export async function getGenres(genre: any) {
    const Genres = await client.fetch(`*[_type == "movie" && slug.current == "${genre}"]{genres}`)
    return Genres
}

export async function getMovieByGenre(genre: any) {
    const Genres = await client.fetch(`*[_type == "movie" && "${genre}" in genres[]| order(releaseDate desc)]
    `)
    // *[_type == "movie" && genres[0] == "${genre}"] // checks only first genre
    return Genres
}

// get All the Genres without duplicate values
export async function getAllGenres() {
    const Genres = await client.fetch(`array::unique(*[_type == "movie"]{
        "genres": genres[]
    }[].genres[])
    `)
    let data = Genres.filter((value: any) => value !== null)
    return data
}

export async function getOrigin() {
    const Origin = await client.fetch(`array::unique(*[_type == "movie"]{
        "origin": origin[]
      }[].origin[])
    `)
    let data = Origin.filter((value: any) => value !== null)
    return data
}


// Get All Download Links On Current Slug

export async function getDownloads(link: any) {
    const Download = await client.fetch(`*[_type == "movie" && slug.current == "${link}"]{download}`)
    return Download
}

//

export async function getEpisodes(link: any) {
    const Episode = await client.fetch(`*[_type == "movie" && slug.current == "${link}"]{episodes}`)
    return Episode
}

export async function getEpHD(link: any) {
    const EpHD = await client.fetch(`*[_type == "movie" && slug.current == "${link}"]{episodes}`)
    let data: any
    EpHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

export async function getEpFHD(link: any) {
    const EpFHD = await client.fetch(`*[_type == "movie" && slug.current == "${link}"]{episodes}`)
    let data: any
    EpFHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

export async function getEpUHD(link: any) {
    const EpUHD = await client.fetch(`*[_type == "movie" && slug.current == "${link}"]{episodes}`)
    let data: any
    EpUHD?.map((item: any) => {
        item.episodes?.map((item: any) => {
            data = item
        })
    })
    return data
}

import { getMovie } from '@/api/client'
import { useEffect, useState } from 'react'
import Episodes from '../Episodes/Episodes'
import DownloadsLink from './DownloadsLink'

const Download = ({ slug }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getMovie())
            setData(data)
        })()
    }, [])

    return (
        <div>{
            data.map((item, idx) => {
                if (item.slug.current == slug && item.hasepisode) {
                    return <Episodes key={idx} slug={slug}></Episodes>
                } else if (item.slug.current == slug) {
                    return <DownloadsLink slug={slug} />
                }
            })
        }</div>
    )
}

export default Download
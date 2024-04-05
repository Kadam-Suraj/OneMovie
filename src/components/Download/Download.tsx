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
    }, [slug])

    return (
        <div className='md:w-1/2 mx-auto'>{
            data.map((item, idx) => {
                if (item.slug.current == slug) {
                    return <div key={idx} className='flex flex-col items-center'>
                        {item.episodes ? <Episodes slug={slug}></Episodes> : item.slug.current == slug && item.download ? <DownloadsLink slug={slug} /> :
                            <h2>Downloads Will Available Soon</h2>}
                    </div>
                }
            })
        }</div>
    )
}

export default Download
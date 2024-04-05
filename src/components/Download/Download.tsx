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
                // if (item.current.slug == slug) {
                //     return <div key={idx}>
                //         {item.episodes ? <Episodes slug={slug}></Episodes> : item.current.slug == slug ? <DownloadsLink slug={slug} /> : <h2>Downloads will Available soon</h2>}
                //     </div>
                // }
                if (item.slug.current == slug) {
                    return <div key={idx}>
                        {item.episodes ? <Episodes key={idx} slug={slug}></Episodes> : null}
                        <DownloadsLink key={idx} slug={slug} />
                    </div>
                    // return <Episodes key={idx} slug={slug}></Episodes>
                } 
                // if (item.slug.current == slug) {
                //     return <DownloadsLink key={idx} slug={slug} />
                // }
            })
        }</div>
    )
}

export default Download
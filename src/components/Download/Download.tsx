import { getInfo } from '@/api/client'
import { useEffect, useState } from 'react'
import Episodes from '../Episodes/Episodes'
import DownloadsLink from './DownloadsLink'

const Download = ({ slug }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const data = (await getInfo())
            setData(data)
        })()
    }, [slug])

    return (
        <div className='md:w-1/2 mx-auto pt-14'>{
            data.map((item, idx) => {
                if (item.slug.current == slug) {
                    return <div key={idx} className='flex flex-col items-center'>
                        {item.episodes ? <Episodes slug={slug} /> : null}
                        {item.download ? <DownloadsLink slug={slug} /> : null}
                        {!item.episodes && !item.download ? <h2>Downloads Will Available Soon</h2> : null}
                    </div>
                }
            })
        }
        </div>
    )
}

export default Download
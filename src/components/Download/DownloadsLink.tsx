import { getMovie } from '@/api/client'
import { useEffect, useState } from 'react'

const DownloadsLink = ({ slug }) => {
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
                if (item.slug.current == slug) {
                    return <div key={idx} className='text-center text-xl'>Downloads Will Available Soon</div>
                }
            })

        }</div>
    )
}

export default DownloadsLink